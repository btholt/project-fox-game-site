---
path: "/state-machine"
title: "State Machine"
order: "3C"
description: "The Project"
section: "Architecture"
---

The requirements we set out for this game read very much like what a [finite state machine][fsm] is. I swear this is the only computer sciencey thing we're going to chat about, but luckily this one isn't as complicated as many of the others.

I'll borrow the example from the [XState][fsm] docs (great library that helps you do finite state machines.) You, as a human, are always either asleep or awake. You are never both awake and asleep, and you never neither awake nor alseep: you are always in exactly one of those states. (Let's not have a medical discussion here, lol, you get my point.)

This is what a finite state machine is: it let's you define various states of what you expect your app to look like and then all "derivative" state is … derived from that chief state. For example, if you were in a `asleep` state, you might have a derived state that is `areEyesClosed` that would always be true in `asleep`. This is instead of the problematic way of having a million `is<Something>` booleans in your code which always fall out of sync.

So that's what we're going to do is model a basic finite state machine that represents our game. Based on the requirements, I can see the following overarching states of the game:

```json
[
  "INIT",
  "HATCHING",
  "IDLING",
  "SLEEPING",
  "EATING",
  "POOPING",
  "POOPED",
  "HUNGRY",
  "CELEBRATING",
  "DEAD"
]
```

At any given time, our game is in one of those states. Furthermore, there are definited transitions. Your game can't go from `HATCHING` to `DEAD` or else you'd have a pretty morbid and unfun game. Instead, `HATCHING` can _only_ go to `IDLING`. We can take advantage of these to make assumptions and reduce our surface area for bugs.

Something like `XState` could help a lot with a game like this, and I implore to you take [David Khourshid's][david] upcoming [Frontend Masters workshop][fem] because he'll get into more depth in it. Instead, we're just going to take the base level concepts and apply them ourselves.

Let's make a new file and call it gameState.js inside of `src`.

```javascript
const gameState = {
  current: "INIT",
  clock: 1,
  tick() {
    this.clock++;
    console.log(this.clock);
    return this.clock;
  }
};

module.exports = gameState;
```

Back in init, change the the init.js,

```javascript
// add at top
import game from "./gameState";

// delete tick function

// change tick()
game.tick();
```

Now we've accomplished a few things. We have an in-game clock that ticks. We can tie our state machine to these ticks of the clock. But also what's great is we decoupled our state machine from an actual clock, so it'll work in game but we can also pull out the game state and test it outside of real time.

From here, we're going to be all getting from one state to another.

I guess it bears mentioning here that I like to write the logic first and then I write the manifestation of the HTML and CSS afterwards. If you think about it, our UI is just a manifest of our state machine. It's a side effect of this ever-moving machine.

[fsm]: https://xstate.js.org/docs/about/concepts.html#finite-state-machines
[david]: https://twitter.com/davidkpiano
[fem]: https://frontendmasters.com/teachers/david-khourshid/
