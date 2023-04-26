---
path: "/interacting-with-the-ui"
title: "Interacting with the UI"
order: "4B"
description: "The Project"
section: "The Game"
---

We have two distinct sorts of logic that we want to keep separated from each other: UI logic (button clicks, hover events, DOM stuff, etc.) and business logic (the clock, the state machine, all the actual logic behind the game.) In this part, we're going to do the UI logic and then we'll add a way for the UI to call into the business logic.

Add a new file called button.js.

```javascript
import { ICONS } from "./constants";

const toggleHighlighted = (icon, show) =>
  document
    .querySelector(`.${ICONS[icon]}-icon`)
    .classList.toggle("highlighted", show);

export default function initButtons(handleUserAction) {
  let selectedIcon = 0;
  function buttonClick({ target }) {
    if (target.classList.contains("left-btn")) {
      toggleHighlighted(selectedIcon, false);
      selectedIcon = (2 + selectedIcon) % ICONS.length;
      toggleHighlighted(selectedIcon, true);
    } else if (target.classList.contains("right-btn")) {
      toggleHighlighted(selectedIcon, false);
      selectedIcon = (1 + selectedIcon) % ICONS.length;
      toggleHighlighted(selectedIcon, true);
    } else {
      handleUserAction(ICONS[selectedIcon]);
    }
  }
  document.querySelector(".buttons").addEventListener("click", buttonClick);
}
```

Pretty dumb UI plumbing here. We're being a bit clever with the toggleHighlighted by using a ternary but I'm fine with this. It's a one liner function that I don't think is too much served by being any more verbose than this. However I wouldn't put this in the middle of a function.

This is using the modulo (`%`) operator to wrap the button pushes. If some one clicks left on the first button, it wraps to the last button. I use the +2 and +1 because that fits my brain better but you could use subtraction as well.

Let's go make that very brief constants.js file.

```javascript
export const ICONS = ["fish", "poop", "weather"];
export const TICK_RATE = 3000;
```

Now we can have one source of truth for our constants. We're also moving `TICK_RATE` here so it's easy to modify later if we choose to.

Let's go init our buttons.

```javascript
// at top
import initButtons from "./buttons";

// replace TICK_RATE
import { TICK_RATE } from "./constants";

// first line of init()
initButtons(game.handleUserAction);
```

And lastly, let's put in a placeholder for the `handleUserAction` in gameState.js

```javascript
// last function in gameState
handleUserAction(icon) {
  console.log(icon);
},
```

This should be all plumbed up now. Head over to your game and try playing around with the buttons! It should log out when you click the middle button and the button highlights should work correctly.

[We've reached the ui-interaction milestone][ui].

[ui]: https://github.com/btholt/project-files-for-fox-game/tree/master/ui-interaction
