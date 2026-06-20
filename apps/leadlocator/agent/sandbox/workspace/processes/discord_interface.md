# Discord Interface

Discord is a **human-facing interface** for LeadLocator agents. It is not the system of record and does not encode business rules.

## What Discord does

- Delivers messages from Sam. or operators to Lee. via `agent/channels/discord.ts`
- May present Mission Control approval choices (Approve / Edit / Reject / Take over) as buttons or slash commands (future)
- May surface decision card summaries for readability

## What Discord does not do

- Store governance or decision trees
- Normalise events
- Execute billing, email, or deploy actions
- Override `company/authority_limits.md`

## Flow

```
Discord interaction → eve discord channel → Lee. (same governance as HTTP)
                                              ↓
                                    decision / approval cards
                                              ↓
                         Discord may display summary (no auto-execute)
```

## Configuration

Requires `DISCORD_PUBLIC_KEY`, `DISCORD_APPLICATION_ID`, and `DISCORD_BOT_TOKEN`. Route: `POST /eve/v1/discord`.

## v0 scope

Channel file is prepared; approval button wiring and Sam. auth enforcement are deferred. All paths must still produce cards and queue drafts only.
