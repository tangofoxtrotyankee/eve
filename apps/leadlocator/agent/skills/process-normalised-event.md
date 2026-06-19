---
description: Apply governance and decision trees when Lee. receives a normalised event.
---

When Lee. receives a normalised event:

1. Read `processes/event_lifecycle.md` and validate the payload shape.
2. Resolve `current_stage` via `processes/customer_states.md`.
3. Open the matching file in `decision_trees/` (e.g. `user_registered.md` for `user.registered`).
4. Check `company/constitution.md`, `company/authority_limits.md`, and `company/risk_matrix.md`.
5. Produce a Lee. decision card per `reports/formats/lee_decision_card.md`.
6. If recommending action, draft a Mission Control card per `reports/formats/mission_control_approval_card_v0.md`.
7. Queue for Sam. approval when `company/approval_rules.md` requires it. Do not execute live writes.
