---
path: "/hello-world"
title: "Hello World"
order: "2A"
description: "Brian sets up the build process to get hello world on the screen"
section: "Frontend Infra"
---

There are a lot of places to start your project. I'm going to show you how I pretty much start every project I do. There are certain tools that help me be productive immediately so I'm pretty keen on getting those up-and ready as soon as possible.

Some people will do more coding up front, but I like to have the "scaffolding" of my infrastructure up as soon as I can. When I say scaffolding, I mean the build process, code formatting, linting, testing, and type checking.

Let's start by getting our first "Hello World" for the project up and running.

You'll also need some images and a bit of CSS for me (I didn't want to dwell too much time on CSS so I wrote a bit of it for you.) You can get that [here][repo]. This repo has the various steps in the project. You'll want to start with the aptly-named [start-here][start-here] directory which has a `src` directory in it with the files you'll need.

It's as simple as running `git clone https://github.com/btholt/project-files-for-fox-game.git`.

You'll notice there are many folders in here. These are the various steps you'll hit along the way. I'll be sure to let you know when we've arrived at the next milestone so if you need help you glance at the next milestone.

Make a new directory for your project and copy in that `src` folder from `start-here` (or just work in the start-here directory, that works too), run `npm init` in that folder. Feel free to answer those questions however you want (or run `npm init -y` to skip them.) This will start a new project with a `package.json` for you. This will allow you to `npm install` new packages and it'll save those to package.json so you can keep track of your dependencies.

## Git

I track everything in git, even if it doesn't make it up to GitHub. Go ahead and run `git init` to make this a git project.

As part of this project (and project that has a `package.json` with dependencies) we'll have to ignore some files. Create a file called `.gitignore` file. In this file you can list patterns for Git to ignore. For now, just add this one line.

```
node_modules/
```

Now anything inside of `node_modules` (where npm put the dependencies) will be ignored.

[repo]: https://github.com/btholt/project-files-for-fox-game
[start-here]: https://github.com/btholt/project-files-for-fox-game/tree/master/start-here
