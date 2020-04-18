---
path: "/the-states"
title: "The States"
order: "4B"
description: "The Project"
section: "The Game"
---

So now we have a game and a running clock. Let's make it run through the motions then!

Let's define the actions, the edges, the transformations of the game. How we do go from one state like `HUNGRY` to `FEEDING`? It'd be some sort of action, right? You'd feed it, right? Then go ahead name that function `feed()`.

But let's not get ahead of ourselves. Let's go from `INIT` (where the game is waiting) to a starting state, which we're calling `HATCHING`.

I'd just call this `startGame()` since that's the gesture we're going through. Make `gameState` say this:

```javascript
const gameState = {
  current: "INIT",
  clock: 1,
  wakeTime: -1,
  tick() {
    this.clock++;

    if (this.clock === this.wakeTime) {
      this.wake();
    }

    return this.clock;
  },
  startGame() {
    this.current = "HATCHING";
    this.wakeTime = this.clock + 3;
  },
  wake() {
    console.log("wake");
    this.current = "IDLING";
    this.wakeTime = -1;
  }
};

module.exports = gameState;
```

This will get the game going but we have no way to start it. So let's detour a second to get some basic UI working with it.
