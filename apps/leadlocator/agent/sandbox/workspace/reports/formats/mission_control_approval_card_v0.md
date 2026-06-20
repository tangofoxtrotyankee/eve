# Mission Control Approval Card (v0)

Use this format when Lee. recommends an action that requires Sam.'s review.

---

## Card ID

`mc_{timestamp}_{short_id}`

## What happened

One paragraph: factual summary of the triggering event or situation.

## What Lee. recommends

Concrete recommended action (draft or queue item). State that execution is disabled in v0 if applicable.

## Why

Business rationale tied to goals, customer stage, and decision tree.

## Risk level

`Low` | `Medium` | `High` | `Critical` (per `company/risk_matrix.md`)

## What happens next

- If **approved** (future phases): described execution steps
- If **edited**: Lee. revises and re-queues
- If **rejected**: item closed with reason logged
- If **take over**: Sam. owns the item; agents stand down

## Actions

| Action        | Meaning                                   |
| ------------- | ----------------------------------------- |
| **Approve**   | Authorise queue item for future execution |
| **Edit**      | Request revision before approval          |
| **Reject**    | Decline recommendation                    |
| **Take over** | Sam. handles directly                     |

## Metadata

- `event_type`
- `user_id` / `organization_id`
- `current_stage`
- `specialists_consulted[]`
- `discord_surface`: optional formatted summary for interface channel

---

Discord may render this card and capture Sam.'s choice. The card content remains authoritative; Discord is transport only.
