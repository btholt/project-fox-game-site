---
path: "/transitioning-between-states"
title: "Transitioning Between States"
order: "4D"
description: "The Project"
section: "The Game"
---

I've found in my career that most of the bugs in my cause arise from states transition incorrectly. Either I forgot to set a flag or I didn't add some number together or something like that. This is where the most danger is. This what your tests should cover. This is what you should focus on getting right.

Let's focus first on transitioning between day and night. The game should X ticks in day and then transition into a brief nighttime period and then come back.

```javascript
// add at top
import { SCENES, RAIN_CHANCE, DAY_LENGTH, NIGHT_LENGTH } from "./constants";

// add in state
sleepTime: -1,

// add else if to tick()
else if (this.clock === this.sleepTime) {
  this.sleep();
}

// add last line to wake()
this.sleepTime = this.clock + DAY_LENGTH;

// add function to gameState
sleep() {
  this.state = "SLEEP";
  modFox("sleep");
  modScene("night");
  this.wakeTime = this.clock + NIGHT_LENGTH;
},
```

Add to constants.js

```javascript
export const DAY_LENGTH = 60;
export const NIGHT_LENGTH = 3;
```

Alright! Now we have a cycle of day & night! (If you need to debug, just make the numbers shorter temporarily.) We cleverily piggybacked on our wakeTime setup since it's actually the same logic.

Great, let's make our fox get hungry now.

```javascript
// at top
import {
  SCENES,
  RAIN_CHANCE,
  DAY_LENGTH,
  NIGHT_LENGTH,
  getNextHungerTime,
  getNextDieTime,
} from "./constants";

// add to state
hungryTime: -1,
dieTime: -1,

// add to tick if statements
else if (this.clock === this.hungryTime) {
  this.getHungry();
} else if (this.clock === this.dieTime) {
  this.die();
}

// last line of wake
this.sleepTime = this.clock + DAY_LENGTH;
this.hungryTime = getNextHungerTime(this.clock);

// last functions of gameSTate
getHungry() {
  this.current = "HUNGRY";
  this.dieTime = getNextDieTime(this.clock);
  this.hungryTime = -1;
  modFox("hungry");
},
die() {
  console.log("die");
},
```

In constants.js

```javascript
export const getNextHungerTime = clock =>
  Math.floor(Math.random() * 3) + 5 + clock;
export const getNextDieTime = clock =>
  Math.floor(Math.random() * 2) + 3 + clock;
```

The stakes have risen! Now our fox friend can perish if our owner doesn't feed them in time! Oh no! What's worse, we haven't implemented a way to feed them, but to be fair, a `console.log` of `die` isn't a bad death either.

Now we're starting to rely on the clock a bit more to track our game. We're also adding a touch of randomness. We want the game to play different each time so we're adding a bit of variance to how long it takes for the fox to get hungry as well as how long the fox has before it dies of hunger.

From here, let's make it possible for our fox to eat. In gameState.js

```javascript
//change feed()
feed() {
  // can only feed when hungry
  if (this.current !== "HUNGRY") {
    return;
  }

  this.current = "FEEDING";
  this.dieTime = -1;
  this.poopTime = getNextPoopTime(this.clock);
  modFox("eating");
  this.timeToStartCelebrating = this.clock + 2;
},
```

To constants.js

```javascript
export const getNextPoopTime = clock =>
  Math.floor(Math.random() * 3) + 4 + clock;
```

This will allow us to feed the fox before he dies! Yay! We added timers to get the fox to start celebrating as well for when it poops (you poop after you eat, right?) Now we want the fox to celebrate after he dines, so let's go implement that.

```javascript
// two variables to track
timeToStartCelebrating: -1,
timeToEndCelebrating: -1,

// add two new ifs to tick
else if (this.clock === this.timeToStartCelebrating) {
  this.startCelebrating();
} else if (this.clock === this.timeToEndCelebrating) {
  this.endCelebrating();
}

// two new functions in game state
startCelebrating() {
    this.current = "CELEBRATING";
    modFox("celebrate");
    this.timeToStartCelebrating = -1;
    this.timeToEndCelebrating = this.clock + 2;
  },
endCelebrating() {
  this.timeToEndCelebrating = -1;
  this.current = "IDLING";
  this.determineFoxState();
},
determineFoxState() {
  if (this.current === 'IDLING') {
    if (SCENES[this.scene] === "rain") {
      modFox("rain");
    } else {
      modFox("idling");
    }
  }
},
```

We need the determineFoxState because if it's raining, the fox should go back to facing away. Let's go make our `wake` use that as well. And we can go ahead and implement change weather since this is the last feature we need to do that

```javascript
// add to wake, right after modScene
this.determineFoxState();

// replace changeWeather
changeWeather() {
  this.scene = (1 + this.scene) % SCENES.length;
  modScene(SCENES[this.scene]);
  this.determineFoxState();
},
```

[We've reached the transitioning-states milestone][states].

[states]: https://github.com/btholt/project-files-for-fox-game/tree/master/transitioning-states
