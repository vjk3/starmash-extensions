# Yutru's Starmash Extensions

This repository hosts all the extensions I've developed for Bombita's Starmash mod for the multi-player online game [Airmash](https://airma.sh).

---

### APM counter

This extensions shows a near-realtime display of player's APM (actions-per-minute) directly on the in-game UI. The current implementation is simplistic and naive in that it only tracks actions-per-second and extrapolates it to get the actions-per-minute.

A more accurate implementation would track a rolling one-minute window to provide a much closer approximation of player's real-world performance. Send me a PR if you have a good solution for me 😀 

<img src="media/Demo of APM counter extension for Starmash.gif">

### Bootstrap

This extension allows you to run your own custom JavaScript snippet right when the site loads up. I found this handy to run little code bits that customize my flag, username, set game effects like turning off smoke particles to eek out a bit more performance etc. Just open StarMash settings and you should see a new Bootstrap section if this extension is properly installed. Simply enter the code you want to run at the start of each session and click "Accept" to save the changes. A final refresh of the site should have things up and running for you 😀

### Voice Commands
Trigger custom in-game actions using your voice.
Coming soon.


### LASER
Aim assist.
Coming soon.


### Motion Trails
Visualize the path your ship has traced. Useful for identifying weak spots in your game play.
Coming soon. 


### Quick Builder
Create and edit new Starmash extensions locally; no CDN or hosting required!
Coming soon. 
