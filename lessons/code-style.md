---
path: "/code-style"
title: "Code Style"
order: "2C"
description: "The Project"
section: "Frontend Infra"
---

If you have watched any of my other courses, you will know that I am pretty passionate about automated code quality. I have a mantra that I live by: that which is not automated is not enforced. I have a strong belief that any sort of linting, testing, formatting, code-reviewing, etc. that you introduce to a codebase / team is creating artificial friction. Developers have a pure idea of how they want to solve a problem they have in their head and any sort of hoops you make them jump through is time spent solving an artificial problem and not moving on to solve another problem.

So why do we have tests, linting, code-style, etc. then? Because we are pre-emptively solving problems that we could have up front. This is beneficial because the developer is still in their headspace of solving a problem, meaning they don't have to come back to this same bit of code and re-gain context. They can immediately solve problems put in front of them instead of doing it later.

As you can, there is a balance here: you want to present immediate feedback on things that a developer can solve and not impede on their creative process an iota more. Create friction where it's important; create none where it's not.

This is comes back to mantra: many teams rely on manual code reviews to enforce stylistic and usually arbitrary coding standards. I refuse. I am known to immediately close any PR (pull request) comment that starts with "nitpick" because that's the developer themself acknowledging the relative uselessness of the comment. That's where I come back to: that which is not automated is not enforced. Do you want me to always use semi-colons? Automate it. Otherwise I will ignore you! :)

So what PRs for then? These should be high level architecture discussions, teaching moments, learning moments, and useful discourse on the state of a PR and the code base. It should never, never, never be: `Nitpick: can you add a space between the () and the function name? kthx`. Either make a linting rule for it or don't ask.
