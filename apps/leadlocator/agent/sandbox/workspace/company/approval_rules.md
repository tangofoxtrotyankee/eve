# Approval Rules

## Mission Control

Any recommendation that would change customer state, send a message, or touch billing must appear as a Mission Control approval card before execution (in phases where execution is enabled).

## Who approves

| Item type                                 | Approver                        |
| ----------------------------------------- | ------------------------------- |
| Internal observation / decision card only | None (Lee. documents and files) |
| Customer communication draft              | Sam.                            |
| Onboarding or ops workflow change         | Sam.                            |
| Billing or subscription action            | Sam. (Fee. advises)             |
| Production or infrastructure change       | Sam. (Dev. advises)             |
| Ethics or compliance exception            | Sam. (Guard. advises)           |
| Governance amendment                      | Sam. only                       |

## Approval outcomes

- **Approve** — queue item may proceed when execution is enabled
- **Edit** — Lee. revises draft and re-queues
- **Reject** — item closed; Lee. logs reason
- **Take over** — Sam. handles directly; agents stand down on that item

## v0 behaviour

Approvals are recorded conceptually on cards. No automated execution occurs after approval in this phase.
