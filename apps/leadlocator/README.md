# LeadLocator — Lee. (Managing Director)

Governed multi-agent foundation for LeadLocator, built on [eve](https://github.com/vercel/eve).

Lee. is the Managing Director agent. Lee. reports to Sam., coordinates specialist agents, and operates under company governance. This first pass is **Observe, Draft, Recommend, and Queue for approval** only — no live write actions.

## Layout

| Path                 | Purpose                                               |
| -------------------- | ----------------------------------------------------- |
| `agent/`             | Eve runtime for Lee. (instructions, channels, skills) |
| `agents/`            | Specialist agent role definitions                     |
| `company/`           | Governance: constitution, limits, approval rules      |
| `processes/`         | Operational playbooks and customer lifecycle          |
| `decision_trees/`    | Event-to-action routing                               |
| `normalised_events/` | Canonical event payloads                              |
| `raw_events/`        | Unprocessed inbound events (future)                   |
| `reports/`           | Decision and Mission Control card formats             |

Discord is a **human-facing interface channel**, not the core logic layer. Business rules live in governance docs, processes, and decision trees.

## Local development

```sh
pnpm install
pnpm --filter leadlocator dev
```

Set `DISCORD_*` env vars when exercising the Discord channel. See `processes/discord_interface.md`.
