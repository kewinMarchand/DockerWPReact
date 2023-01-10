#!/usr/bin/env bash
set -euo pipefail

./bin/stop.sh

FILE=./app/build/index.js
if [ -f "$FILE" ]; then
    echo "$FILE existe."
    echo "création des containers"
    cd .
    docker compose up -d
    echo "containers ok."

    open http://127.0.0.1:8000/
else
    echo "$FILE n'existe pas, c'est le premier run."
    ./bin/bootstrap.sh
fi
