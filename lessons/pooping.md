---
path: "/pooping"
title: "Pooping"
order: "4E"
description: "The Project"
section: "The Game"
---

I secretly may have made this section just so Frontend Masters has to list on their site that they have a section about pooping.

Our little foxy friend will have to poop after whenever he eats. So let's go make that happen.

In gameState.js

```javascript
// with the rest of the state
poopTime: -1,

// inside tick
else if (this.clock === this.poopTime) {
  this.poop();
}

// add function to gameState
poop() {
  this.current = "POOPING";
  this.poopTime = -1;
  this.dieTime = getNextDieTime(this.clock);
  modFox("pooping");
},
```

Pretty straight forward here. Similar to what we've done before.

Let's go add clean up poop!

```javascript
// replace cleanUpPoop
cleanUpPoop() {
  if (this.current === "POOPING") {
    this.dieTime = -1;
    togglePoopBag(true);
    this.startCelebrating();
    this.hungryTime = getNextHungerTime(this.clock);
  }
},

// add to endCelebrate as last line
togglePoopBag(false);
```

That's it! Everything else we're piggy-backing on code we already wrote. We can safely toggle off the poop bag in every endCelebrate because if it's not there, we can still turn it off.
