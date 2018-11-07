# Yutru's Starmash Extensions

This repository hosts all the extensions I've developed for Bombita's Starmash mod for the multi-player online game [Airmash](https://airma.sh).

---

### 1.  APM counter

This extensions shows a near-realtime display of player's APM (actions-per-minute) directly on the in-game UI. The current implementation is simplistic and naive in that it only tracks actions-per-second and extrapolates it to get the actions-per-minute.

A more accurate implementation would track a rolling one-minute window to provide a much closer approximation of player's real-world performance. Send me a PR if you have a good solution for me 😀 

<img src="media/Demo of APM counter extension for Starmash.gif">
