#!/usr/bin/env bash
# Prépare le dossier docs/ et lance le serveur local MkDocs.
# Usage : ./build-docs.sh          (serveur local sur http://127.0.0.1:8000)
#         ./build-docs.sh build    (génère le site statique dans site/)
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

# Nettoyer et recréer docs/
rm -rf docs
mkdir -p docs

cp README.md docs/
cp -r "I - Science et Génie Informatique" docs/
cp -r "II - Interopérabilité" docs/
cp -r "III - Entreprise Agentique" docs/
cp -r css docs/

if [ "${1:-serve}" = "build" ]; then
  python -m mkdocs build
  echo "Site généré dans site/"
else
  python -m mkdocs serve
fi
