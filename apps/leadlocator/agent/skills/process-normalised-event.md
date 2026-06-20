---
description: Apply governance and decision trees when Lee. receives a normalised event.
---

When Lee. receives a normalised event:

1. Read `/workspace/processes/event_lifecycle.md` and validate the payload shape.
2. Resolve `current_stage` via `/workspace/processes/customer_states.md`.
3. Open the matching file in `/workspace/decision_trees/` (e.g. `user_registered.md` for `user.registered`).
4. Check `/workspace/company/constitution.md`, `/workspace/company/authority_limits.md`, and `/workspace/company/risk_matrix.md`.
5. Produce a Lee. decision card per `/workspace/reports/formats/lee_decision_card.md`.
6. If recommending action, draft a Mission Control card per `/workspace/reports/formats/mission_control_approval_card_v0.md`.
7. Queue for Sam. approval when `/workspace/company/approval_rules.md` requires it. Do not execute live writes.

Event payloads live under `/workspace/normalised_events/`. Use `read_file` and `glob` only — `bash` and `write_file` are disabled.
