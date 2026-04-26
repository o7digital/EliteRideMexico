#!/usr/bin/env bash
set -euo pipefail

echo "Checking local raster image references in src/ (expecting WebP-first)..."

# We only flag local project assets (starting with /), not external CDNs.
matches="$(rg -n --pcre2 "['\"]/(?!/)[^'\"]+\.(png|jpe?g)['\"]" src || true)"

if [[ -n "$matches" ]]; then
  echo ""
  echo "Found local non-WebP references:"
  echo "$matches"
  echo ""
  echo "Use .webp when possible, or add a <picture> fallback strategy."
  exit 1
fi

echo "OK: no local .png/.jpg/.jpeg references found in src/."
