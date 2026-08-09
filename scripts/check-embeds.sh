#!/usr/bin/env bash
#
# Reports whether any embedded app is serving an out-of-date build.
#
#   ./scripts/check-embeds.sh
#
# The apps live in their own repos alongside this one, and what this site
# serves is a COPY of their build output taken at a point in time. Nothing
# about that copy changes when the source moves on — the route keeps working,
# it just quietly keeps serving the old version. That's the failure this
# catches: silent staleness, with no error anywhere to notice.
#
# Compares the commit recorded in embedded.json (written by embed-app.sh) with
# each source repo's current HEAD. Exits non-zero if anything is behind, so it
# can gate a deploy or run from a hook.

set -uo pipefail
cd "$(dirname "$0")/.."

MANIFEST="embedded.json"

if [ ! -f "$MANIFEST" ]; then
  echo "no $MANIFEST — nothing embedded yet, or it predates the manifest."
  exit 0
fi

STALE=0

while IFS=$'\t' read -r SLUG SRC COMMIT SUBJECT DIRTY; do
  [ -z "$SLUG" ] && continue

  if [ ! -d "$SRC" ]; then
    printf '?  %-22s source missing at %s — cannot check\n' "$SLUG" "$SRC"
    continue
  fi

  HEAD="$(git -C "$SRC" rev-parse HEAD 2>/dev/null || echo unknown)"
  SRC_DIRTY="$(test -n "$(git -C "$SRC" status --porcelain 2>/dev/null)" && echo true || echo false)"

  if [ "$HEAD" != "$COMMIT" ]; then
    BEHIND="$(git -C "$SRC" rev-list --count "$COMMIT..$HEAD" 2>/dev/null || echo '?')"
    printf '\n!  %-22s %s commit(s) behind\n' "$SLUG" "$BEHIND"
    printf '   serving: %.7s  %s\n' "$COMMIT" "$SUBJECT"
    printf '   source:  %.7s  %s\n' "$HEAD" "$(git -C "$SRC" log -1 --format=%s 2>/dev/null)"
    printf '   fix:     ./scripts/embed-app.sh %s\n' "$SLUG"
    STALE=1
  elif [ "$SRC_DIRTY" = "true" ]; then
    printf '~  %-22s up to date, but %s has uncommitted changes\n' "$SLUG" "$SRC"
  elif [ "$DIRTY" = "true" ]; then
    printf '~  %-22s built from a dirty tree — recorded commit may not describe it\n' "$SLUG"
  else
    printf 'ok %-22s %.7s\n' "$SLUG" "$COMMIT"
  fi
done < <(node -e '
  const m = JSON.parse(require("fs").readFileSync("embedded.json", "utf8"));
  for (const [slug, v] of Object.entries(m)) {
    process.stdout.write([slug, v.source, v.commit, v.subject, v.builtFromDirtyTree].join("\t") + "\n");
  }
')

if [ "$STALE" -ne 0 ]; then
  echo
  echo "One or more embedded apps are behind their source. Re-run embed-app.sh"
  echo "for each, then commit the result — the built output is what deploys."
  exit 1
fi

exit 0
