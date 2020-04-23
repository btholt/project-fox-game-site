---
path: "/the-project"
title: "The Project"
order: "1B"
description: "The Project"
section: "Welcome"
---

Do you remember [those virtual][virtual-pet] [pet toys][virtual-pet-2] from the 90s? They were the bane of every poor teacher and parent's existance. They're essentially needy little virutal pets that need you to feed and clean up their poops every few hours. We're going to build our own!

Luckily, [Ms Alice Brereton][alice] has created some more beautiful assets for us to use for the game.

[Here is my version of the game][fox].

The code for this game isn't too simple and that'll make for a fun exercise. And there are _many_ correct ways to program it. I'll share with you some tips and tricks and how I did it but feel free to explore and learn!

## Requirements

- The game starts in an initialized state. The user must press the center game to get started.
- Users can switch between the three icons on the bottom using the left and right button. To press one of the icons, they will click the middle button. Users cannot directly click the icons.
- If they reach the end of the icons and try to go further (click the right button when the right-most icon is selected) it should loop around.
- When the user starts, the fox will hatch after showing the hatch animation.
- Once the fox is hatched, show the fox in an idle animation in the day time.
- The user can switch the weather from day to rain using the weather icon.
- After some amount of time the fox will become hungry. This should be on some sort of variable schedule to add some unpredictability to the game.
- The fox can only be fed when hungry.
- After a fox is a fed, after another random interval, the fox will poop.
- The fox cannot have the poop cleaned up unless there is poop to be cleaned up
- When a user cleans up poop, it should add another random interval until the fox is hungry again.
- The fox cannot be hungry and have pooped at the same time.
- If the user hasn't fed a hungry fox or clean up a fox's poop after a random interval, it should cause the fox to die and go to the game over screen.
- After a longer random interval of day/rain, it should become night. It stays night for a fixed interval. The fox does not get hungry, poop, or die in its sleep. Once it wakes up, it starts with a new random interval of hunger and poop. You cannot change the weather, clean up poop or feed a sleeping fox.
- Once the game hits nighttime, reset the timers. The fox will wake up and the first thing that will happen is it will become hungry.
- Once a fox dies, the landscape goes into the death scene, the fox becomes the tombstone, and the game is over. If the user presses the middle button again, it restarts the game with a new hatch.
- Using a modal, you should tell the user to restart the game by pressing the middle button.
- The fox should not be able to die, get hungry, poop, be fed, have the poop cleaned up, or fall asleep when it is being fed, sleeping, hatching, or dead.
- While in general I'm a huge advocate for responsive designs and making things work on any viewport size, this one time I'm absolving you of that responsiblity and you can just assume a fixed desktop browser size.

Phew. That's a lot of requirements!

## Technical Requirements

There are none, lol.

You can implement this however you see fit.

I will be writing this in straight, vanilla JavaScript. This is for several reasons:

- It should be the common denominator between all students. All the concepts we'll be talking about could equally be applied to React, Angular, Svelte, Vue or even jQuery. The state management could be done in Redux, ngrx, or xstate. It's a universal language for all of us.
- This is a really simple project with simple requirements. If this project was made in a vacuum, there's a high chance I would do it this way. While tools like React help make large projects more manageable, we don't need the weight here.
- It's a useful exercise to pull away from your tried-and-true tools to stretch your brain in interesting ways to make sure you're not overly reliant on tools that come-and-go.

A fun exercise could be to reimplement this game in different frameworks and technologies to see how they fit your thinking and how you think changes in different technical constraints and machinations.

Beyond that, I'll make some just personal preference choices. You're free to do it with me or you're free to deviate. Let's get started!

[virtual-pet]: https://en.wikipedia.org/wiki/Tamagotchi
[virtual-pet-2]: https://en.wikipedia.org/wiki/Giga_Pet
[alice]: https://www.pickledalice.com/
[fox]: https://btholt.github.io/project-files-for-fox-game/
