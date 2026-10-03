# TI-JEPA

Project page: interactive illustrations of why a single-frame JEPA target
can't carry instantaneous velocity, and what TI-JEPA does about it (split
the latent into a pose code and an explicit finite-difference motion code,
predict both). The page replays real model rollouts side by side — ground
truth, a memoryless baseline, and TI-JEPA — and reports the paper's probe,
kill-experiment, and planning numbers.

English page: `index.html`. The same page has a control that switches to Chinese.

Code and checkpoints:
- [github.com/OliverZ-dot/TI-JEPA](https://github.com/OliverZ-dot/TI-JEPA) — environments, models, evaluation protocols, demo videos.
- [huggingface.co/TingheOliver/TI-JEPA-checkpoints](https://huggingface.co/TingheOliver/TI-JEPA-checkpoints) — all trained checkpoints.

`data/` holds the frame pairs and decoded-position curves the interactive
players read from; `assets/` holds the static figures. The interactive demos
are mechanism illustrations; the headline numbers come from the paper's
tables.
