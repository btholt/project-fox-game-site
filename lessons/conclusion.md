---
path: "/conclusion"
title: "Wrapping Up"
order: "5A"
description: "The Project"
section: "Conclusion"
---

And that's a wrap! Hopefully you learned a few things about how I build projects and how I leverage my tools to be more effective.

A few last comments from me.

## gameState.js

`gameState.js` ended up being fairly large. After building this project, I considered breaking it down into several smaller modules but decided against it. Right now, at ~175 lines (including whitespace) it's comprehendible in one file and I felt like that was worth a longer file. If it got much larger than that, I'd go break it down. In this case I'd want it to start to become problematic before I broke it down.

## CSS

The CSS ended up in two files, a bit going against my philosophy of deletability. In this design, we didn't much have components to match CSS with. As such, any such decomposition of the CSS felt arbitrary at best. Still, we probably could have broken frame, fox, and background out.

## Tests

I had originally intended to lightly cover testing in this course but it ran long and so I leave as an exercise to you. I feel we left the code in a pretty testable state.

## TypeScript

Just again, I feel like TypeScript could have benefitted this project a lot and saved me some time bugs while I was coding it.

## CI/CD and GitHub Pages

A cool thing you could do is go make your code deploy via GitHub Actions. You can see on both my projects repo and site repo, I'm using GitHub Actions to deploy them and it's not too bad. I'm a big fan of GitHub Actions.

## Make a framework version

Now that you've made a vanilla JS version with me, go do it again with your favorite framework or learn a new one and redo the site. See if you like it better or worst.

## Co-Op Parenting

Go back and remake this game, but do it with a back end (like Node.js) with real-time websockets so that everyone is playing one game (so if you feed it, it feeds the fox on my computer too.)

## Local Storage

It'd be cool if you could pause the game and come back later. Perfect opportunity to use local storage.

## And that's it!

Thanks again for following the course! Tweet at me and let me know you finished it!
