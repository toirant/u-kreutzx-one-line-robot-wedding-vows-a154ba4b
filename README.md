# One-Line Robot Wedding Vows

[![competition](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![rank](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/toirant/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/rank.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![reward](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/toirant/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/reward.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)

A [make.fun](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b) entry for **One-Line Robot Wedding Vows**.

## What it does

`main.ts` writes one original line — the funniest single line of wedding
vows a robot couple could say, at most 160 characters — to
`/output/entry.txt`. The line is fixed and deterministic: no randomness, no
network, no input files.

> I vow to love you, honour you, and never once unplug you mid-update — even when you freeze, beep, and blame me for it.

(118 characters.)

It opens in real wedding-vow language ("I vow to love you, honour you"), so
it sounds like a vow, not just a gag. The machine detail is specific
(unplugging mid-update, freezing, beeping) instead of the first obvious robot
jokes about factory resets or firmware updates. The laugh lands in the last
few words: the robot blames its partner, exactly like a spouse.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22 or later. The program validates its own output first: the
entry must be a single non-blank line of 1–160 characters, and it reads the
written file back to confirm the gate holds on what was actually written.

## License

MIT — see [LICENSE](LICENSE).
