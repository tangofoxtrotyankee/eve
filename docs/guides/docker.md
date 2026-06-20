---
title: "Docker"
description: "Run eve in Docker on Windows, macOS, or Linux with a single docker compose up command, a fixed dev port, and the weather-agent demo."
---

Use Docker when you want a reproducible local environment without installing Node.js on the host. This flow works from **PowerShell**, **Command Prompt**, or **Git Bash** on Windows — no WSL or bash setup script is required.

## Quick start

From the repository root:

```bash
docker compose up
```

Then open **http://localhost:44513**.

The container:

1. Bind-mounts the repo at `/workspace`
2. Installs dependencies on first run (`pnpm install`)
3. Builds the local `eve` package
4. Starts the `weather-agent` demo fixture (`apps/fixtures/weather-agent`) on port **44513**, bound to **0.0.0.0** inside the container

Stop with `Ctrl+C`, or run detached:

```bash
docker compose up -d
docker compose logs -f
docker compose down
```

## Model credentials

The demo agent calls a real model. Before chatting, provide credentials in `.env.local` at the repo root (or link a Vercel project with `vercel link` and `vercel env pull`). See [Getting started](../getting-started) for gateway and provider options.

## Why not `docker run` alone?

The published `Dockerfile` is a **runtime base image** (Node, pnpm, common CLI tools). It does not embed the eve source tree. You must mount the repository:

```bash
docker run --rm -it \
  -p 44513:44513 \
  -v "${PWD}:/workspace" \
  -w /workspace \
  eve-local \
  node scripts/docker/dev.mjs
```

`docker compose up` does this for you.

## Why not `pnpm dev` from the repo root in Docker?

Root `pnpm dev` starts the framework watcher and assigns the demo agent a **random port** (`--port 0`). That port is not mapped through Docker, so the browser cannot connect. The Docker entrypoint uses a **fixed port** (44513) and binds **0.0.0.0** so host port mapping works.

Inside the container you can also run:

```bash
EVE_DOCKER_DEV=1 pnpm dev
```

## Run from an agent root

`eve` commands must run from a valid **agent root** — a directory with `agent/instructions.md`, `agent/agent.ts`, and `package.json`. The monorepo demo lives at:

```text
apps/fixtures/weather-agent/
```

Running `eve dev` from the repository root fails with:

```text
Could not resolve an eve agent root from "/workspace"
```

To run a different agent in Docker, set `EVE_DOCKER_AGENT` to the agent's `package.json` name:

```bash
EVE_DOCKER_AGENT=weather-agent docker compose up
```

## Custom agents and the pnpm workspace

Agents must live under a pnpm workspace path so `eve: workspace:*` resolves. Supported locations:

| Path              | Example                       |
| ----------------- | ----------------------------- |
| `apps/fixtures/*` | `apps/fixtures/weather-agent` |
| `apps/*`          | `apps/leadlocator`            |
| `agents/*`        | `agents/my-agent`             |
| `e2e/fixtures/*`  | e2e test agents               |

Creating an agent at `agents/my-agent` (outside the workspace) causes:

```text
Cannot find package 'eve' imported from ...
```

Scaffold a new workspace agent with:

```bash
mkdir -p agents/my-agent
cd agents/my-agent
pnpm exec eve init .
```

Or copy `apps/fixtures/weather-agent` as a template.

## Windows notes

| Approach                          | Works?                                                            |
| --------------------------------- | ----------------------------------------------------------------- |
| `docker compose up`               | Yes — recommended                                                 |
| `docker compose up` in PowerShell | Yes                                                               |
| `bash ./scripts/docker/setup.sh`  | Optional; forwards to `docker compose up` (needs Git Bash or WSL) |
| `.\scripts\docker\setup.ps1`      | Yes — PowerShell wrapper                                          |
| `pnpm dev` on host without Docker | Yes — needs Node.js 24+ locally                                   |

On PowerShell, prefer:

```powershell
docker compose up
```

not `bash ./scripts/docker/setup.sh`, unless Git Bash is installed.

## Environment variables

| Variable           | Default         | Purpose                                        |
| ------------------ | --------------- | ---------------------------------------------- |
| `EVE_DOCKER_PORT`  | `44513`         | Host and container dev port                    |
| `EVE_DOCKER_HOST`  | `0.0.0.0`       | Bind address inside the container              |
| `EVE_DOCKER_AGENT` | `weather-agent` | pnpm workspace package name to start           |
| `EVE_DOCKER_DEV`   | set by compose  | Switches root `pnpm dev` to fixed Docker ports |

## Build the image manually

```bash
docker build -t eve-local .
docker compose up
```

## Troubleshooting

**Port already in use** — change the port:

```bash
EVE_DOCKER_PORT=44514 docker compose up
```

**Empty `/workspace` shell** — the repo was not mounted. Use `docker compose up` or add `-v "${PWD}:/workspace"`.

**`docker port eve` shows nothing** — the container must publish ports via compose (`44513:44513`). A bare `docker run` without `-p` exposes nothing.

**Browser cannot connect** — confirm the log line `eve dev http://localhost:44513` (or your chosen port) and that compose maps the same port on the host.
