#!/usr/bin/env bash
set -euo pipefail

cat <<'EOF'
eve Docker setup

This repository no longer requires a bash setup script. Use Docker Compose instead:

  docker compose up

On Windows (PowerShell or Command Prompt):

  docker compose up

The repo is mounted at /workspace, the demo weather-agent starts on a fixed port,
and the dev server binds to 0.0.0.0 inside the container.

Open http://localhost:44513 after startup completes.

See docs/guides/docker.md for model credentials and custom agents.
EOF

exec docker compose up "$@"
