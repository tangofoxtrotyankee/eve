# Risk Matrix

Risk levels apply to recommended actions and Mission Control cards.

| Level        | Definition                               | Examples                                              | Default handling              |
| ------------ | ---------------------------------------- | ----------------------------------------------------- | ----------------------------- |
| **Low**      | Read-only observation; internal drafts   | Event triage, decision card                           | Lee. may proceed without Sam. |
| **Medium**   | Customer-visible draft; no system writes | Follow-up email draft, onboarding nudge draft         | Queue for Sam. approval       |
| **High**     | Financial, legal, or reputational impact | Billing change, refund, public response               | Sam. approval required        |
| **Critical** | Irreversible harm potential              | Data deletion, production deploy, account termination | Sam. approval + Guard. review |

## v0 ceiling

No recommended action in v0 may execute live writes. Even **Low** risk items only produce drafts and queue entries.

## Escalation triggers

Escalate risk by one level when:

- Customer stage is `needs_human_review`
- Payment has failed more than once
- Guard. flags fraud, abuse, or policy concern
- Specialist agents disagree on recommendation
