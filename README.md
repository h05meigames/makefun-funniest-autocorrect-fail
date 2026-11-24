# Funniest Autocorrect Fail — "Eat the CEO"

[![make.fun](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![rank](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/h05meigames/makefun-funniest-autocorrect-fail/rank.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![reward](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/h05meigames/makefun-funniest-autocorrect-fail/reward.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154)

Entry for the [Funniest Autocorrect Fail](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154) bounty on [make.fun](https://make.fun/r/0ene8b3q).

`main.ts` (Node 22+, stdlib only) writes one line to `entry.txt` — a text
sent to a friend right after a job interview, where "meet" slipped into
"eat", so the sender casually reports telling the panel they are not afraid
to eat the CEO. One line, 120 characters, no trailing newline.

Run it with `MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts`; it validates the
1–199 character gate, enforces exactly one line with no control characters,
writes `entry.txt`, and verifies the file on disk matches what it printed.
