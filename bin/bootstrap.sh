#!/usr/bin/env bash
set -euo pipefail

echo "installation des node modules."
cd ./app
yarn install
echo "node modules ok."

echo "création du dossier de build."
mkdir build
cd build
touch index.js
echo "dossier de build ok."
