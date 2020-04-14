---
path: "/init"
title: "Init the Project"
order: "3B"
description: "The Project"
section: "Architecture"
---

So let's write JS! We're a few sections in, it's about time we wrote some JS!

Add a file inside of `src` called `init.js`. In there let's get the guts going.

```javascript
const TICK_RATE = 3000;

function tick() {
  console.log("tick", Date.now());
}

async function init() {
  console.log("starting game");

  let nextTimeToTick = Date.now();
  function nextAnimationFrame() {
    const now = Date.now();
    if (nextTimeToTick <= now) {
      tick();
      nextTimeToTick = now + TICK_RATE;
    }
    requestAnimationFrame(nextAnimationFrame);
  }

  nextAnimationFrame();
}

init();
```

This is a game. A game with a time component. We have a fox that's going to be doing something over a period of time. We _could_ do this with a series of `setInterval` and `setTimeout` calls but let me promise you only tears lay down that path. It is very difficult to get those times to line up well.

Let me introduce you to `requestAnimationFrame`. This is a technique where we can say to the browser, "Hey! Browser! Next time you have an idle moment, call me 😉" complete with winky face. As you may imagine, this can be very frequent, and we don't want our to execute at lightspeed. So in this case, we're saying, "check to see if it's been 3 seconds. If it has, call `tick`. If not, chill and wait for the next frame. This way, we're guaranteed to run `tick` every three seconds, give or take a few milliseconds (since the browser will wait until it's idle to call.)

Head to your `index.html`, add the line `<script src="./init.js"></script>` in there. This will let Parcel know that this is the entry to your JS app. You won't have to do this again.

If you try to run your code right now, it's very likely you'll get a gross error saying `regeneratorRuntime is not defined`. We need to tell Babel (which Parcel uses under the hood) to not transpile our `async` call and to leave it as async since modern Edge/Firefox/Safari/Chrome can understand async/await. So head to your package.json and add this:

```json
{
  […]
  "browserslist": [
    "last 2 Firefox versions"
  ]
}
```

This lets Babel know to just make this project work for the last two versions of Firefox and to not transpile things that would work in Firefox. You can use Chrome too. Go ahead and run `rm -rf .cache dist` in your project. When you change configurations, Parcel doesn't always grasp it. Just do it to be safe; your project will take an extra second to compile but it should work now.

Now you should see it ticking every three seconds! This give us a nice frame to work with!
