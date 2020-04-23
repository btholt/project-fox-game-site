---
path: "/death"
title: "Death"
order: "4G"
description: "The Project"
section: "The Game"
---

After poop comes death. These are the hard facts we have to deal with.

This is the last state transition we have to deal with, and we'll plumb together the rest of the game as well at that point.

So let's go implement `die` first

In gameState.js

```javascript
// at top
import { modFox, modScene, togglePoopBag, writeModal } from "./ui";

// last line of startGame
writeModal();

// replace die
die() {
  this.current = "DEAD";
  modScene("dead");
  modFox("dead");
  this.sleepTime = -1;
  writeModal("The fox died :( <br/> Press the middle button to start");
},
```

In ui.js

```javascript
export const writeModal = function writeModal(text = "") {
  document.querySelector(
    ".modal"
  ).innerHTML = `<div class="modal-inner">${text}</div>`;
};
```

This should now allow the fox to actually pass on if our pet parents aren't diligent in caring for their digital friend. Let's go do one more thing: once night hits, we should clear our timers. Let's go make that happen.

```javascript
// last lines of sleep
clearTimes() {
  this.wakeTime = -1;
  this.sleepTime = -1;
  this.hungryTime = -1;
  this.dieTime = -1;
  this.poopTime = -1;
  this.timeToStartCelebrating = -1;
  this.timeToEndCelebrating = -1;
},

// last lines of sleep, add clearTimes _before_ wakeTime setting
this.clearTimes();
this.wakeTime = this.clock + NIGHT_LENGTH;

// replace sleepTime = -1 line in die()
// might as well, less surface area for bugs
this.clearTimes();
```

This allows us to be sure we clear out all times when we need to, otherwise we could have unexpected timers going off.

That's it! The game should fully be working by now! Our foxy friend can now have a full life cycle.

[We've reached the last milestone, code-complete-game][code].

[code]: https://github.com/btholt/project-files-for-fox-game/tree/master/code-complete-game
