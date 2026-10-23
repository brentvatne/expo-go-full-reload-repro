#!/bin/sh
# Run while the app is open in Expo Go with `npx expo start`. Makes one save
# that Fast Refresh cannot apply in place, so it falls back to a full reload.
#   ./repro/run.sh          adds a non-component export to src/app/index.tsx
#   ./repro/run.sh layout   adds `unstable_settings` to src/app/_layout.tsx
set -e
cd "$(dirname "$0")/.."
if [ "$1" = "layout" ]; then
  printf "\nexport const unstable_settings = { anchor: 'index' };\n" >> src/app/_layout.tsx
  echo "added unstable_settings to src/app/_layout.tsx"
else
  printf "\nexport const answer = 42;\n" >> src/app/index.tsx
  echo "added a non-component export to src/app/index.tsx"
fi
