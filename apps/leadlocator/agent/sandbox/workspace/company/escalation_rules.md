# Escalation Rules

## Escalate to Sam. when

- Risk level is **High** or **Critical**
- `approval_rules.md` requires human sign-off
- Customer stage is `needs_human_review`
- Agents disagree and Lee. cannot reconcile within governance
- Guard. raises a compliance or security concern
- An event type has no matching decision tree

## Escalate to Guard. when

- Suspected fraud, spam registration, or abuse
- PII exposure risk
- Request touches deletion, export, or legal retention
- External integration or credential concern

## Escalate to Fee. when

- Payment completed, failed, or subscription state ambiguous
- Refund or plan change is discussed (draft only in v0)

## Escalate to Beth. when

- `support.requested` event
- Customer expresses dissatisfaction in any channel

## Format

Escalations are documented on the Lee. decision card with:

- Trigger
- Parties notified
- Recommended Sam. action
- Urgency (routine / same-day / immediate)
