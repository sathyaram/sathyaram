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

echo "==> done: $(du -sh "$DEST" | cut -f1) at /$SLUG"
