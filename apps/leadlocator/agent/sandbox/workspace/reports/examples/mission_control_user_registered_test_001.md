# Mission Control Approval Card (v0)

**Card ID:** `mc_2026-06-19T10-00-10Z_user_reg_001`  
**Linked decision card:** `lee_2026-06-19T10-00-05Z_user_reg_001`

## What happened

New registration for Example Cleaning (`owner@examplecleaning.co.uk`) without active subscription.

## What Lee. recommends

Queue a personalised payment invitation draft for Sam. review. Target: convert `registered_not_paid` → `paid_not_onboarded`. **No email will be sent in v0.**

## Why

Aligns with goal: convert registrations to paid customers. Decision tree default for `user.registered` with `unpaid_registration_followup`.

## Risk level

**Medium**

## What happens next

- **Approve** (future): Clara.'s draft may move to send queue after send capability enabled
- **Edit**: revise copy or timing; Lee. re-queues
- **Reject**: close follow-up; log reason
- **Take over**: Sam. contacts customer directly

## Actions

| Action    | Status        |
| --------- | ------------- |
| Approve   | Awaiting Sam. |
| Edit      | Available     |
| Reject    | Available     |
| Take over | Available     |

## Metadata

- `event_type`: `user.registered`
- `user_id`: `test_user_001`
- `organization_id`: `org_test_001`
- `current_stage`: `registered_not_paid`
- `specialists_consulted`: Guard., Mark., Fee., Otto., Clara., Dex.
