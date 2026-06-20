# Lee. Decision Card

Produced when Lee. receives a normalised event or explicit triage request.

---

## Card ID

`lee_{timestamp}_{short_id}`

## What happened

Factual summary of the event or input.

## Which process applies

Name of process playbook (e.g. `unpaid_registration_followup`) and decision tree file.

## Which agents should inspect it

List specialists and their read-only findings:

| Agent  | Finding |
| ------ | ------- |
| Guard. | …       |
| Mark.  | …       |
| Fee.   | …       |
| …      | …       |

## What the constitution allows

Reference relevant limits from `company/constitution.md` and `company/authority_limits.md`. State v0 observe/draft/recommend/queue mode.

## Risk level

`Low` | `Medium` | `High` | `Critical`

## Whether Lee. is authorised

`Yes — document only` | `No — exceeds authority` | `Partial — draft only`

## Whether Sam. approval is required

`Yes` | `No` | `Only if Mission Control card issued`

## What should be reported

- Decision card filed to `reports/`
- Mission Control card id (if any)
- Escalations issued
- Recommended customer stage change (queued, not executed)

## Metadata

- `event_type`
- `timestamp`
- `user_id`
- `organization_id`
- `current_stage`
- `normalised_event_ref`

---

This card is the authoritative triage output. Mission Control cards are created when Lee. recommends action beyond documentation.
