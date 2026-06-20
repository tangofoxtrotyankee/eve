# Customer States

Canonical customer lifecycle stages for LeadLocator.

## States

### `registered_not_paid`

User account exists. No active paid subscription.

- Entry: `user.registered`
- Typical next: payment or nurture follow-up
- Owner agents: Mark., Otto., Lee.

### `paid_not_onboarded`

Payment received; onboarding not finished.

- Entry: `payment.completed` (first paid)
- Typical next: onboarding sequence
- Owner agents: Otto., Beth., Lee.

### `active_customer`

Onboarding complete; product in use.

- Entry: `onboarding.completed`
- Typical next: success monitoring, lead usage
- Owner agents: Beth., Otto., Lee.

### `cancelled`

Subscription ended or account closed.

- Entry: cancellation event (future)
- Typical next: win-back draft or archive
- Owner agents: Beth., Fee., Lee.

### `needs_human_review`

Automated handling paused; Sam. must decide.

- Entry: Guard. flag, repeated payment failure, support escalation, ambiguous data
- Typical next: Sam. takeover or explicit routing
- Owner agents: Lee., Guard., Sam.

## State rules (v0)

- Agents may **recommend** stage changes on cards only
- No automated stage writes in v0
- `current_stage` on normalised events is the source for triage

## Diagram

```
registered_not_paid → paid_not_onboarded → active_customer
        ↓                    ↓                    ↓
   needs_human_review ← ← ← ← ← ← ← ← ← ← ← ← ← ←
        ↓
    cancelled
```
