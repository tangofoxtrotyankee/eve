# Decision Tree: user.registered

## Trigger

`event_type == "user.registered"`

## Preconditions

- Normalised event present with `user_id`, `email`, `domain`, `organization_id`
- `current_stage` should be `registered_not_paid` (if not, flag Dex. data quality)

## Steps

1. **Lee. triage**
   - Log event on decision card
   - Confirm operating mode: observe / draft / recommend / queue only

2. **Guard. inspect** (read-only)
   - Disposable email domain?
   - Domain mismatch with business name?
   - Velocity / duplicate org signals?
   - If concern → recommend `needs_human_review`

3. **Mark. inspect**
   - Recommend nurture angle for unpaid registration
   - Suggest `recommended_next_process`: `unpaid_registration_followup`

4. **Fee. inspect**
   - Confirm `stripe_customer_id` null and `subscription_status` none expected
   - No billing action required

5. **Otto. inspect**
   - Note onboarding not applicable until payment

6. **Clara. draft** (if follow-up recommended)
   - Draft welcome / payment nudge email for Mission Control (not sent)

7. **Lee. decide**
   - Produce decision card
   - If follow-up recommended → Mission Control card, risk **Medium**, Sam. approval required

## Default recommendation

Process: `unpaid_registration_followup`

Action (queued): Draft personalised payment invitation for `owner@examplecleaning.co.uk` referencing `examplecleaning.co.uk`.

## Blocked in v0

- Sending email
- Creating Stripe customer
- Changing `current_stage` in production stores

## Escalation

Guard. fraud signal → `needs_human_review` + immediate Sam. note on card.
