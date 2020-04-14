---
path: "/organization"
title: "Organizing Your Code"
order: "3A"
description: "The Project"
section: "Architecture"
---

There is an endless ocean of ways you can organize your code, all with some trade-offs versus others. Some favor searchability, some favor being understandable from a file explorer, and most just end up being a junk drawer smattering of files. So what do you optimize for when you write code?

## Deleteability

When I write code I try to optimize for "deleteability". When I say deleteability, I mean that when a file / module is no longer useful, you can easily remove it from your code base. Why is that? When you write code to be easily extractable from your code base, it forces you into some habitys by default. Your code _has to be_ modular in order to extract it. If everything is tangled together like spare extension cords, good luck trying to remove anything; any extraction of dead code requires invasive surgery.

Another good reason is that living code is constantly in flux. Imagine a team of twenty engineers working on a single code base for ten years. At the end of ten years, what percentage code remains from the original commit? There's a good chance that number is 0%. As such, it means that your code base has churned through a lot of code base and a lot of dead code is floating around. If you're not diligent, your code base will end up with 10% active lines of the code and the rest mere flotsam of code wreckages of years past.

For a C++ project, this band from a maintainability point of view, but often the additional binary size is a rounding error. For a JavaScript application, including dead code can add KBs or even MBs to a page's weight and that's just acceptable. Every byte counts to a web dev.

Another difficult problem for in particular frontend development is that when we delete one JavaScript file, it can be more than just a `.js` file that has to go: that file will have accompanying tests, CSS, and HTML that needs to be jettisoned along with it. If your code base doesn't have an architecture that allows for it, you'll frequently end up with lots of useless tests and overwhelming CSS messes to detangle. I'm sure many of you have experienced CSS files that are enormous because there's a ton of dead CSS in it. So let's try to figure that out!

## Folder Organization

I try to put like-files together in a folder. I try to have a 1:1 mapping of CSS files to JS files (I use CSS modules for this.) I try to have tests live as close to the files they're testing as possible. That way when you delete something, you can always delete files and frequently delete whole directories. Some people find this to be a lot of folder nesting but I try to not go overboard with it. It's also about making sensible trade offs and being intentional with your actions. Don't make decisions because they're the default ones to make: be intentional and thoughtful.

We'll in general have a folder be one "concept" or "module". That folder will have all the CSS, JS, tests and whatever else it needs for that module. When it comes time to delete it, the whole folder can go.
