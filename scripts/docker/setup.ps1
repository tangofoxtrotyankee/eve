Write-Host @"
eve Docker setup

Use Docker Compose from the repository root:

  docker compose up

The repo is mounted at /workspace, the demo weather-agent starts on port 44513,
and the dev server binds to 0.0.0.0 inside the container.

Open http://localhost:44513 after startup completes.

See docs/guides/docker.md for model credentials and custom agents.
"@

docker compose up @args
