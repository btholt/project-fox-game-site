---
path: "/the-states"
title: "The States"
order: "4C"
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
    console.log("hatching");
    this.current = "HATCHING";
    this.wakeTime = this.clock + 3;
  },
  wake() {
    console.log("hatched");
    this.current = "IDLING";
    this.wakeTime = -1;
  },
  handleUserAction(icon) {
    console.log(icon);
  }
};

export default gameState;
```

This will get the game going but we have no way to start it. So let's detour a second to get some basic UI working with it. Let's fill out `handleUserAction`.

```javascript
handleUserAction(icon) {
  // can't do actions while in these states
  if (
    ["SLEEP", "FEEDING", "CELEBRATING", "HATCHING"].includes(
      this.current
    )
  ) {
    // do nothing
    return;
  }

  if (this.current === "INIT" || this.current === "DEAD") {
    this.startGame();
    return;
  }

  // execute the currently selected action
  switch (icon) {
    case "weather":
      this.changeWeather();
      break;
    case "poop":
      this.cleanUpPoop();
      break;
    case "fish":
      this.feed();
      break;
  }
},
changeWeather() {
  console.log('changeWeather')
},
cleanUpPoop() {
  console.log('cleanUpPoop')
},
feed() {
  console.log('feed')
},
```

So this is the logic of how we're going to handle user clicks but if you try to click it doesn't work, you'll get a dreaded context error. Why? We're using gameState's handleUserAction without context because it's being called by the browser. Let's make it work.

In gameState.js

```javascript
// at bottom
export const handleUserAction = gameState.handleUserAction.bind(gameState);
```

In init.js

```javascript
// at top
import game, { handleUserAction } from "./gameState";

// replace initButtons
initButtons(handleUserAction);
```

Now it'll have proper context. So try clicking the button. You should now see the console.logs.

Let's make those actually display the fox. Make a new file called ui.js. Put this in there.

```javascript
export const modFox = function modFox(state) {
  document.querySelector(".fox").className = `fox fox-${state}`;
};
export const modScene = function modScene(state) {
  document.querySelector(".game").className = `game ${state}`;
};
export const togglePoopBag = function togglePoopBag(show) {
  document.querySelector(".poop-bag").classList.toggle("hidden", !show);
};
```

Nothing too surpising here. Now we can write out our state the DOM easily using these helpers.

Back to our gameState.js

```javascript
import { SCENES, RAIN_CHANCE } from "./constants";

startGame() {
  this.current = "HATCHING";
  this.wakeTime = this.clock + 3;
  modFox("egg");
  modScene("day");
},
wake() {
  this.current = "IDLING";
  this.wakeTime = -1;
  modFox("idling");
  this.scene = Math.random() > RAIN_CHANCE ? 0 : 1;
  modScene(SCENES[this.weather]);
},
```

Add to constants.js

```javascript
export const SCENES = ["day", "rain"];
export const RAIN_CHANCE = 0.2;
```

Now we can see our fox friend! Hooray! He should hatch now and start idling.

We are modding the scene here because now we can re-use these functions to restart the game after death for startGame and to wake up after night. Just for fun, we're making it randomly rain sometimes. Currently, it'll rain ~20% of the time. Feel free to play with that number.

Okay! So now the game is off and running. Let's go to the next section where we'll flesh out the rest of the states!
