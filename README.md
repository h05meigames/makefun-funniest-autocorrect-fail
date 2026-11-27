# Funniest Autocorrect Fail — "The Rapist Every Thursday"

[![make.fun](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![rank](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/h05meigames/makefun-funniest-autocorrect-fail/rank.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![reward](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/h05meigames/makefun-funniest-autocorrect-fail/reward.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154)

Entry for the [Funniest Autocorrect Fail](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154) bounty on [make.fun](https://make.fun/r/0ene8b3q).

`main.ts` (Node 22+, stdlib only) writes one line to `entry.txt` — a text
sent to a friend after a first therapy session, where "therapist" slipped
into "the rapist", so the sender deadpans that they meet the rapist every
Thursday and it's really helping. One line, 106 characters, no trailing newline.

Run it with `MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts`; it validates the
1–199 character gate, enforces exactly one line with no control characters,
writes `entry.txt`, and verifies the file on disk matches what it printed.
