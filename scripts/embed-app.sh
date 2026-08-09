#!/usr/bin/env bash
#
# Builds one of the adjacent app repos as a static export and drops it into
# this site's public/ directory, so it serves from sathyaram.com/<slug>.
#
#   ./scripts/embed-app.sh springtuner
#   ./scripts/embed-app.sh springtuner ../some-other-dir
#
# The app's own next.config.ts reads EMBED_BASE_PATH and sets basePath +
# assetPrefix from it (see springtuner's for the pattern). Without that its
# chunks resolve against this site's root and 404.
#
# The output is COMMITTED, deliberately. Vercel builds this repo alone — the
# app repos are siblings on disk and aren't there at deploy time — so if the
# built files aren't in git, the route 404s in production. That also means a
# change to an app isn't live until this script is re-run and the result
# committed; the two repos don't deploy together.
#
# Adding a new app: run this, then add the slug to EMBEDDED_APPS in
# next.config.ts so /<slug> rewrites to its index.html.

set -euo pipefail

SLUG="${1:?usage: embed-app.sh <slug> [source-dir]}"
SRC="${2:-../$SLUG}"
DEST="public/$SLUG"

cd "$(dirname "$0")/.."

if [ ! -d "$SRC" ]; then
  echo "error: no app at $SRC" >&2
  exit 1
fi

echo "==> building $SLUG from $SRC"
( cd "$SRC" && EMBED_BASE_PATH="/$SLUG" npm run build )

if [ ! -d "$SRC/out" ]; then
  echo "error: $SRC built but produced no out/ — is output:'export' set in its next.config?" >&2
  exit 1
fi

# Guard against the prefix silently not applying: a build whose assets point at
# the root will load here and then fail to fetch its own chunks, which is a
# confusing thing to debug from a blank page.
if ! grep -q "/$SLUG/_next" "$SRC/out/index.html"; then
  echo "error: $SRC/out/index.html has no /$SLUG/_next asset paths." >&2
  echo "       Its next.config.ts probably isn't reading EMBED_BASE_PATH." >&2
  exit 1
fi

echo "==> copying to $DEST"
rm -rf "$DEST"
mkdir -p "$DEST"
rsync -a "$SRC/out/" "$DEST/"

# Record which commit this copy was built from. The app repos live outside this
# one, so nothing here would otherwise know that a copy has fallen behind its
# source — the site would just quietly keep serving an old build. This is what
# scripts/check-embeds.sh compares against.
COMMIT="$(git -C "$SRC" rev-parse HEAD 2>/dev/null || echo unknown)"
SUBJECT="$(git -C "$SRC" log -1 --format=%s 2>/dev/null || echo unknown)"
DIRTY="$(test -n "$(git -C "$SRC" status --porcelain 2>/dev/null)" && echo true || echo false)"

node -e '
  const fs = require("fs");
  const [slug, src, commit, subject, dirty, size] = process.argv.slice(1);
  const path = "embedded.json";
  const manifest = fs.existsSync(path) ? JSON.parse(fs.readFileSync(path, "utf8")) : {};
  manifest[slug] = {
    source: src,
    commit,
    subject,
    // True when the build included edits that were not committed in the source
    // repo — the recorded commit alone does not then describe what is serving.
    builtFromDirtyTree: dirty === "true",
    embeddedAt: new Date().toISOString(),
    size,
  };
  // Rebuild in key order rather than passing a sorted key array as the
  // replacer — an array replacer is a property WHITELIST, which silently
  // filters out every nested field and writes `{}` per app.
  const sorted = Object.fromEntries(Object.keys(manifest).sort().map((k) => [k, manifest[k]]));
  fs.writeFileSync(path, JSON.stringify(sorted, null, 2) + "\n");
' "$SLUG" "$SRC" "$COMMIT" "$SUBJECT" "$DIRTY" "$(du -sh "$DEST" | cut -f1 | tr -d ' ')"

echo "==> done: $(du -sh "$DEST" | cut -f1) at /$SLUG (from ${COMMIT:0:7})"
if [ "$DIRTY" = "true" ]; then
  echo "    note: $SRC had uncommitted changes, so this build includes work that" >&2
  echo "          isn't in ${COMMIT:0:7}. Commit there for the record to be accurate." >&2
fi
