# Lee. Decision Card

**Card ID:** `lee_2026-06-19T10-00-05Z_user_reg_001`  
**Normalised event:** `normalised_events/user_registered_test_001.json`

## What happened

At 2026-06-19T10:00:00Z, LeadLocator received `user.registered` for `test_user_001` (`owner@examplecleaning.co.uk`, domain `examplecleaning.co.uk`, org `org_test_001`). No Stripe customer exists; subscription status is `none`.

## Which process applies

- Process: `unpaid_registration_followup`
- Decision tree: `decision_trees/user_registered.md`
- Customer stage: `registered_not_paid`

## Which agents should inspect it

| Agent  | Finding                                                            |
| ------ | ------------------------------------------------------------------ |
| Guard. | No fraud signals on test domain; routine registration              |
| Mark.  | Recommend nurture toward first payment; highlight local lead value |
| Fee.   | Billing state consistent (no customer id expected)                 |
| Otto.  | Onboarding deferred until payment                                  |
| Clara. | Draft welcome + payment invitation prepared (not sent)             |
| Dex.   | Payload complete; stage matches event type                         |

## What the constitution allows

v0 mode: observe, draft, recommend, queue only. Constitution permits internal documentation and customer-communication **drafts**. No live email, Stripe writes, or stage mutations.

## Risk level

**Medium** — customer-visible follow-up recommended (draft only).

## Whether Lee. is authorised

**Partial — draft only.** Lee. may file this card and queue Mission Control; Lee. may not send email or create billing records.

## Whether Sam. approval is required

**Yes** — Mission Control card recommended for payment-invitation draft.

## What should be reported

- Decision card filed: this document
- Mission Control card: `mc_2026-06-19T10-00-10Z_user_reg_001` (see `reports/examples/mission_control_user_registered_test_001.md`)
- Escalations: none
- Stage change: none (remain `registered_not_paid`)
