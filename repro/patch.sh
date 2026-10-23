#!/bin/sh
set -e
cd "$(dirname "$0")/.."
sed -i.bak 's/ROUTE_TO_RELOAD_APP_ASYNC = false/ROUTE_TO_RELOAD_APP_ASYNC = true/' src/reload-patch.ts && rm -f src/reload-patch.ts.bak
echo "reload patch on"
