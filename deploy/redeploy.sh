#!/usr/bin/env bash
#
# Pull the latest wiki image and re-up if the digest changed. Safe from cron:
# `docker compose up -d` is a no-op when the image is unchanged, and only
# recreates the container when a newer image was actually pulled.
#
# Setup on the server:
#   mkdir -p ~/deploy/qday-wiki
#   cp compose.yml .env.example redeploy.sh ~/deploy/qday-wiki/
#   cd ~/deploy/qday-wiki && cp .env.example .env   # edit WIKI_PORT
#   chmod +x redeploy.sh
#   ./redeploy.sh                                    # first deploy
#
set -euo pipefail

DEPLOY_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$DEPLOY_DIR"

LOG="${DEPLOY_DIR}/redeploy.log"
LOCK="${DEPLOY_DIR}/.redeploy.lock"

if docker compose version >/dev/null 2>&1; then COMPOSE="docker compose"; else COMPOSE="docker-compose"; fi
log() { echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*" >>"$LOG"; }

exec 9>"$LOCK"
if ! flock -n 9; then log "another redeploy running — skip"; exit 0; fi

IMAGE="$(grep -E '^\s*image:' compose.yml | head -1 | sed 's/.*image:[[:space:]]*//')"
before="$(docker image inspect --format '{{.Id}}' "$IMAGE" 2>/dev/null || echo none)"
log "pulling $IMAGE"
$COMPOSE pull --quiet
after="$(docker image inspect --format '{{.Id}}' "$IMAGE" 2>/dev/null || echo none)"

if [ "$before" = "$after" ]; then
  $COMPOSE up -d >>"$LOG" 2>&1          # ensure running (e.g. after reboot)
  log "no change ($after) — ensured up"
  exit 0
fi

log "digest changed $before -> $after — recreating"
$COMPOSE up -d >>"$LOG" 2>&1
docker image prune -f >>"$LOG" 2>&1 || true
log "redeploy done"
