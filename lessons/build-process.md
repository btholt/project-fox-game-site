---
path: "/build-process"
title: "Build Process"
order: "2B"
description: "The Project"
section: "Frontend Infra"
---

We need to first decide how we're going to structure the project. The whole game could conceivably all fit in one file and that wouldn't be the end of the world. Not recommended, but not the worst.

We then need to split up the game into multiple files. In order to do that, we need some sort of strategy to bundle our app. Until quite recently, browsers didn't know how to eloquently handle multiple files being downloaded for a project. We could have made multiple JS files and put multiple `<script>` tags on the page but that's a pretty brittle and unfun way of doing it.

Recently browsers shipped the ability to module loading. It's support is [okay and getting better][modules]. But this isn't really useful yet because it needs wider adoption. Let's use a JavaScript bundler.

## Bundler Choices

The default choice for most people in this case would be [Webpack][webpack] and that is a great choice. It it most certainly a tool fit for this job and has extremely wide adoption across top tech companies, Microsoft included. Setting it up can be a bit of a headache but I have few complaints beyond that.

Another wonderful and still-going project that often gets overlooked is [Browserify][browserify]. It's older than Webpack and was certainly the gold standard before Webpack. The project is considered "done" so they don't add many new features to it but it is still actively maintained.

Some other ones you may want to check into would be [Snowpack][snowpack], [Rollup][rollup], and [microbundle][microbundle] (powered by Rollup.) All have their own interesting merits, wrinkles, and drawbacks.

## Parcel

We're going to roll with [Parcel][parcel]. If you're not familiar with Parcel you're in for a treat. It takes zero configuration to get up and running with Parcel. You just point it at the entry point to your app (normally an `index.html`) and it just figures out the rest and does a great job. So let's get it rolling.

## Get Started with Parcel

Run `npm install -D parcel-bundler`.

Create a `src` directory in your project. This is more of a habit for me: I always put code into a `src` directory. It needs to go somewhere, might as well go there.

Inside the `src` directory, make a file named `index.html`. In that HTML file, put:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fox Project</title>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
```

Just a bare bones HTML file. In your `package.json`, there's a property called `scripts`. In `scripts`, add a new line `"dev": "parcel src/index.html"`. This will start a dev server any time you run `npm run dev` that will run Parcel with `src/index.html` as the entry point. Try it! Head to your command and run `npm run dev`. Then head to [http://localhost:1234](http://localhost:1234) to see your beautiful new project! You should see your HTML you just created being served.

Pretty easy to get up and running, huh?

Last thing, we need to ignore in Git two new directories which Parcel creates. Your `.gitignore` will look like this.

```
node_modules/
.cache/
dist/
```

This is so we don't commit derived or cache files to your codebase: you only want to store source code, the source of truth, in your code. Everything else can be built whenever.

[State of the repo can be found here][build-process].

[modules]: https://caniuse.com/#feat=es6-module
[snowpack]: https://www.snowpack.dev/
[rollup]: https://rollupjs.org/guide/en/
[browserify]: http://browserify.org/
[microbundle]: https://github.com/developit/microbundle
[parcel]: https://parceljs.org/
[build-process]: https://github.com/btholt/built-fox-project/tree/master/build-process
