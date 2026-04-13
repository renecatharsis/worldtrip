#!/usr/bin/env bash
set -e  # Exit immediately if a command exits with a non-zero status

echo "Starting build process..."

NODE="node:24"

docker run --rm \
  -v "$(pwd)":/opt/app \
  -w /opt/app \
  "$NODE" \
  bash -c "pnpm install && pnpm run build && rm -rf node_modules"

echo "Cleaning up Docker image..."
docker rmi -f "$NODE" || echo "Could not remove image $IMAGE (it may be in use or already removed)."

echo "Build completed successfully."