---
path: "/type-checking"
title: "Type Checking"
order: "2H"
description: "The Project"
section: "Frontend Infra"
---

Here is where I'd tell you to set up [TypeScript][ts] because I typically would for myself. What I tell folks is that any project that is destined to be worked on any longer than two weeks will be best served with having typings associated with the code.

Why? I believe that types serve several purposed.

TypeScript forces you, the original implementor of the code, to think through your types. This is helpful because it shakes out of some of the loosey-goosey habits that we as JavaScript developers get ourselves into. It forces to you to think that a String is going in here and a Number is coming out the other side. It forces you to reconsider letting `undefined`s and `null`s float through your code. It forces you to be intentional with the flow of your code and I think that is a large benefit.

TypeScript also helps future you and co-workers reading your code. If you can see that a parameter coming into a function is a String, you don't have to either throw in a `console.log` and execute it or go back to the caller to see what's being passed in. In other words, it allows future readers of your code to take shortcuts in making assumptions about the code they're looking at, and again I believe that's a large benefit.

To some lesser degree, it will help you prevent runtime errors due to `undefined is not a function` and other things like that. This is not the biggest reason to use TypeScript because good code discipline is more important in preventing those bugs anyway, but nonetheless it certainly helps inform those disciplines.

Lastly, TypeScript allows you to drag your documentation of your code around your codebase, particularly if you have a modular architecture. If I import a module in another part of my codebase and I type `module.`, it start autopopulating call signatures and properties for me to remind myself what's available. It's immediately available information that I find super helpful.

## So why not

Again, I love TypeScript. But it is not for every project. For quick and dirty proofs-of-concept, command-line scripts, and other such ephemeral scripts I tend not to use TypeScript. TypeScript is a long term play, not as much for the short term.

And as many of you have probably found, you do inevitably spend some time fighting the compiler. This can get frustrating when your code _would_ work but TypeScript is picking on you for not casting the right way or some other annoyance. You should definitely factor that cost in when you're considering if your team should use TypeScript.

So why aren't we using it for this course then? While I personally would use TypeScript here, I recognize that many people landing here wouldn't. I recognize many of you either don't know TypeScript yet or don't want to ever know TypeScript so I have made the decision to remove the barrier to the knowledge here. For the rest of you who would want TypeScript, I am sorry and you can definitely check out [Intermediate React v2][react] where I teach some TypeScript. And for the rest of you who do want to learn [Frontend Masters has a wonderful course from my old colleague Mike North.][fem].

[ts]: https://www.typescriptlang.org/
[fem]: https://frontendmasters.com/courses/typescript-v2/
