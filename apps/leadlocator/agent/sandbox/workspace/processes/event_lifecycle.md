# Event Lifecycle

## Overview

Events flow from external systems into LeadLocator, are normalised, triaged by Lee., and produce decision artifacts. Live side-effects are disabled in v0.

```
[Source system] → raw_events/ → normalised_events/ → Lee. → decision card → Mission Control (optional) → Sam. approval → [future execution]
```

## Stages

1. **Capture** — raw payload lands in `raw_events/` (future ingestion)
2. **Normalise** — Dex. rules produce canonical shape in `normalised_events/`
3. **Triage** — Lee. loads event, resolves customer stage, opens decision tree
4. **Inspect** — Lee. requests read-only input from specialists
5. **Decide** — Lee. produces decision card with authorisation status
6. **Recommend** — if action warranted, draft Mission Control approval card
7. **Queue** — item awaits Sam. (Approve / Edit / Reject / Take over)
8. **Execute** — disabled in v0

## Event types

| Event type             | Typical stage impact                             |
| ---------------------- | ------------------------------------------------ |
| `user.registered`      | `registered_not_paid`                            |
| `payment.completed`    | toward `paid_not_onboarded` or `active_customer` |
| `payment.failed`       | may trigger `needs_human_review`                 |
| `onboarding.completed` | `active_customer`                                |
| `lead.created`         | `active_customer` (usage signal)                 |
| `support.requested`    | any; may set `needs_human_review`                |

## Required normalised fields

- `source`
- `event_type`
- `timestamp`
- `user_id`
- `organization_id`
- `current_stage`
- `recommended_next_process` (optional hint from normaliser)

## Discord

Discord does not participate in stages 1–2. It may deliver Sam.'s approval choice at stage 7 via the interface channel. See `processes/discord_interface.md`.
