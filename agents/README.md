# Custom agents

Place standalone eve agent apps here when you want a top-level agent directory
outside `apps/`.

Each agent directory must be a valid eve agent root:

```text
agents/my-agent/
├── package.json
├── tsconfig.json
├── agent/
│   ├── agent.ts
│   └── instructions.md
└── turbo.json
```

`agents/*` is included in the pnpm workspace so `eve: workspace:*` resolves the
local framework package.

Start an agent from its directory:

```bash
cd agents/my-agent
pnpm exec eve dev --host 0.0.0.0 --port 44513
```

In Docker, set `EVE_DOCKER_AGENT` to the package name from `package.json`:

```bash
EVE_DOCKER_AGENT=my-agent docker compose up
```

For a working demo without creating an agent, use the default
`apps/fixtures/weather-agent` via `docker compose up`.
