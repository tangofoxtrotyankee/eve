# Authority Limits

## Global limits (v0)

All agents are in **read-and-draft** mode unless a future amendment explicitly enables a write.

| Action                                          | Allowed in v0 | Approver             |
| ----------------------------------------------- | ------------- | -------------------- |
| Read normalised events                          | Yes           | —                    |
| Draft decision / approval cards                 | Yes           | —                    |
| Queue Mission Control items                     | Yes           | —                    |
| Send email                                      | No            | Sam. (future)        |
| Send Discord messages to customers              | No            | Sam. (future)        |
| Create/update Stripe customers or subscriptions | No            | Sam. + Fee. (future) |
| Delete any record                               | No            | Sam.                 |
| Deploy production code                          | No            | Sam. + Dev.          |
| Change governance documents                     | No            | Sam.                 |

## Lee. limits

Lee. may coordinate specialists and produce cards. Lee. may not:

- Approve their own recommended live actions
- Override Guard. risk blocks
- Bypass Sam. when `approval_rules.md` requires human sign-off

## Specialist limits

Each specialist operates within their role file in `agents/`. Cross-role actions require Lee. routing and applicable approval.

## Discord

Discord users may submit messages or approval choices. Only Sam.-authenticated Discord interactions may approve Mission Control items (enforcement deferred to a later phase; document intent now).
