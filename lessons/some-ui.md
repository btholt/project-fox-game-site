---
path: "/some-ui"
title: "Some UI"
order: "4A"
description: "The Project"
section: "The Game"
---

First, I'm going to give some basic CSS and images to work with. We _could_ go through how I wrote these but I think we're best served by just getting some base CSS and all the images together.

[Download these files][files]. Unzip them in your source directory.

Mostly it's just setting the backgrounds and setting up all the CSS animations. Frankly you don't want to learn animations from me. [There are phenomenal teachers on Frontend Masters][css] who can do a much better job here. I used basic sprites and [CSS step animations][step] to get it up and running. Feel free to look at that CSS Tricks article to see how to do it.

Let's keep going. Add a blank file called "style.css". Change your index.html to be:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Fox Pet</title>
    <link rel="stylesheet" href="./sprites.css" />
    <link rel="stylesheet" href="./style.css" />
  </head>

  <body>
    <div class="container">
      <div class="inner">
        <div class="game day"></div>
        <div class="fox hidden"></div>
        <div class="poop-bag hidden"></div>
        <div class="foreground-rain"></div>
        <div class="frame"></div>
        <div class="modal">
          <div class="modal-inner">
            Press the middle button to start
          </div>
        </div>
        <div class="buttons">
          <button class="btn left-btn"></button>
          <button class="btn middle-btn"></button>
          <button class="btn right-btn"></button>
        </div>
        <div class="icons">
          <div class="icon highlighted fish-icon"></div>
          <div class="icon poop-icon"></div>
          <div class="icon weather-icon"></div>
        </div>
      </div>
    </div>

    <script src="./init.js"></script>
  </body>
</html>
```

You should a random assortment of buttons and UI with a nice spotted background.

Let's get the frame showing.

In style.css, add

```css
/* general */

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}
```

This is basically how I start any project. The `box-sizing` part let's us have more predictable measuring of our elements. The margin and paddin part let eliminate the default styles and this font-family is a good one for us to get started with. (I don't like web fonts in general.)

Append this to style.css

```css
/* frame and background */

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
```

We're going to use flexbox to center everything. Then we're going to use the position absolute trick to have it take up 100% of its parent's space.

Append this again:

```css
.frame {
  height: 762px;
  width: 762px;
  position: relative;
}

.inner {
  position: relative;
}

.game {
  width: 628px;
  height: 577px;
  position: absolute;
  top: 62px;
  left: 67px;
}

.game.night {
  width: 716px;
  top: 62px;
  left: -19px;
}

.hidden {
  display: none;
}
```

The frame should be showing up. Again, we're doing this with a fixed width so this is fine. This will also have the game lining up inside of the frame (buttons are still off.)

You can also change the `day` class on the `game` div in the HTML to see night as well since we swap out the background.

Append again:

```css
/* buttons */

.buttons {
  position: absolute;
  top: 674px;
  left: 266px;
  height: 71px;
  width: 228px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.icons {
  position: absolute;
  top: 572px;
  left: 194px;
  height: 67px;
  width: 374px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

Let's quickly do the poop bag

```css
/* lol poop */

.poop-bag {
  position: absolute;
  top: 300px;
  left: 160px;
}
```

You can remove the `hidden` on the poop bag in the HTML to make sure it works.

You'll see there's still the black text beneath the game. This is supposed to be the modal letting the players know how to start. Let's style that.

```css
/* modal */

.modal {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: blueviolet;
  color: white;
}

.modal:empty {
  display: none;
}

.modal-inner:empty {
  display: none;
}
```

We now should see a banner telling the player to start. Another fun part of this is we made it so if the modal doesn't have any text in it, it'll hide itself. Handy for showing and hiding this modal.

Lastly, we need the CSS for the fox. Since we're doing fixed width, absolute positions are fine. (I just guessed and checked with these.)

```css
.fox {
  position: absolute;
  top: 336px;
  left: 285px;
  overflow: hidden;
}

.fox-pooping {
  top: 319px;
  left: 159px;
}

.fox-celebrate {
  top: 290px;
  left: 290px;
}

.fox-rain {
  top: 362px;
}

.fox-hungry {
  top: 362px;
}

.fox-eating {
  top: 362px;
}

.fox-egg {
  top: 289px;
  left: 248px;
}

.fox-sleep {
  top: 351px;
  left: 445px;
}

.fox-dead {
  top: 380px;
  left: 243px;
}
```

That's it for the UI! We now have all the toops we need to get started with writing the JS for the game!

[We've reached the css-completed milestone][css]

[files]: https://btholt.github.io/project-fox-game-site/files.zip
[css]: https://frontendmasters.com/learn/css/
[step]: https://css-tricks.com/using-multi-step-animations-transitions/
[box-sizing]: https://css-tricks.com/almanac/properties/b/box-sizing/
[css]: https://github.com/btholt/project-files-for-fox-game/tree/master/css-completed
