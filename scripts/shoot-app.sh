#!/usr/bin/env bash
#
# Screenshots an embedded app straight from its live route and writes the
# result to public/projects/<slug>.jpg, for the homepage card artwork.
#
#   ./scripts/shoot-app.sh springtuner
#   ./scripts/shoot-app.sh harrypotterspellbook spells 250
#
# Args: <slug> [anchor-id] [scroll-offset-px]
#
# Shooting the real route rather than pasting a screenshot in by hand means the
# card can never drift from the app: re-run this after embed-app.sh and the
# artwork is current by construction.
#
# Headless Chromium captures the top of a page with no way to scroll first,
# which is a problem when the interesting part is below a full-height hero. The
# optional anchor routes the capture through public/__shot.html, a same-origin
# iframe harness that scrolls and settles the target's scroll-triggered reveals
# before the shot. The harness is written and removed by this script.

set -euo pipefail
cd "$(dirname "$0")/.."

SLUG="${1:?usage: shoot-app.sh <slug> [anchor-id] [offset-px]}"
ANCHOR="${2:-}"
OFFSET="${3:-0}"

DEV_URL="http://localhost:3000"
DEST="public/projects/$SLUG.jpg"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"; rm -f public/__shot.html' EXIT

BROWSER=""
for candidate in \
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser" \
  "/Applications/Chromium.app/Contents/MacOS/Chromium" \
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge"; do
  [ -x "$candidate" ] && BROWSER="$candidate" && break
done
[ -z "$BROWSER" ] && { echo "error: no Chromium-based browser found for headless capture" >&2; exit 1; }

if ! curl -sf -o /dev/null "$DEV_URL/$SLUG"; then
  echo "error: $DEV_URL/$SLUG is not responding — start the dev server first" >&2
  exit 1
fi

TARGET="$DEV_URL/$SLUG"
if [ -n "$ANCHOR" ]; then
  cat > public/__shot.html <<'HARNESS'
<!doctype html>
<meta charset="utf-8">
<title>capture harness</title>
<style>html,body{margin:0;height:100%;overflow:hidden}iframe{border:0;width:100%;height:100%;display:block}</style>
<iframe id="f"></iframe>
<script>
  const params = new URLSearchParams(location.search);
  const f = document.getElementById("f");
  f.addEventListener("load", () => {
    const doc = f.contentDocument, win = f.contentWindow;
    // filter matters as much as opacity: reveals that blur as well as fade
    // leave every element sharp in position but soft without this.
    const style = doc.createElement("style");
    style.textContent =
      '.reveal,[class*="reveal"]{opacity:1!important;transform:none!important;filter:none!important;transition:none!important;}';
    doc.head.appendChild(style);
    const target = doc.getElementById(params.get("at"));
    if (target) win.scrollTo(0, target.offsetTop + Number(params.get("offset") || 0));
  });
  f.src = params.get("url") || "/";
</script>
HARNESS
  TARGET="$DEV_URL/__shot.html?url=%2F$SLUG&at=$ANCHOR&offset=$OFFSET"
fi

echo "==> capturing $SLUG"
"$BROWSER" --headless=new --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=2 --virtual-time-budget=12000 \
  --window-size=1500,1000 --screenshot="$TMP/shot.png" "$TARGET" >/dev/null 2>&1

[ -s "$TMP/shot.png" ] || { echo "error: capture produced nothing" >&2; exit 1; }

# 1600px wide is ample for a card that renders around 750px at 2x, and JPEG
# rather than PNG because these are gradient-heavy screenshots where PNG runs
# to megabytes for no visible gain. next/image re-encodes to webp on serve
# regardless, so this only governs what the repo carries.
mkdir -p public/projects
sips -Z 1600 -s format jpeg -s formatOptions 86 "$TMP/shot.png" --out "$DEST" >/dev/null

echo "==> wrote $DEST ($(du -h "$DEST" | cut -f1))"
