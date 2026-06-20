# LeadLocator — Lee. (Managing Director)

Governed multi-agent foundation for LeadLocator, built on [eve](https://github.com/vercel/eve).

Lee. is the Managing Director agent. Lee. reports to Sam., coordinates specialist agents, and operates under company governance. This first pass is **Observe, Draft, Recommend, and Queue for approval** only — no live write actions.

## Layout

| Path                                         | Purpose                                                      |
| -------------------------------------------- | ------------------------------------------------------------ |
| `agent/`                                     | Eve runtime for Lee. (instructions, channels, skills, tools) |
| `agent/sandbox/workspace/`                   | Governance docs seeded into `/workspace/` at runtime         |
| `agent/sandbox/workspace/company/`           | Constitution, limits, approval rules                         |
| `agent/sandbox/workspace/agents/`            | Specialist agent role definitions                            |
| `agent/sandbox/workspace/processes/`         | Operational playbooks and customer lifecycle                 |
| `agent/sandbox/workspace/decision_trees/`    | Event-to-action routing                                      |
| `agent/sandbox/workspace/normalised_events/` | Canonical event payloads                                     |
| `agent/sandbox/workspace/raw_events/`        | Unprocessed inbound events (future)                          |
| `agent/sandbox/workspace/reports/`           | Decision and Mission Control card formats                    |

Eve seeds `agent/sandbox/workspace/**` into the runtime sandbox at `/workspace/`. Lee. reads governance via `read_file` / `glob` / `grep` — not from app-root siblings outside `agent/`.

Write-capable framework tools (`bash`, `write_file`, `web_fetch`, `web_search`) are disabled under `agent/tools/` for v0.

Discord is a **human-facing interface channel**, not the core logic layer.

## Local development

```sh
pnpm install
pnpm --filter eve build
pnpm --filter leadlocator dev
```

Set `DISCORD_*` env vars when exercising the Discord channel. See `agent/sandbox/workspace/processes/discord_interface.md`.
