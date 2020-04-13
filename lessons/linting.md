---
path: "/linting"
title: "Linting"
order: "2F"
description: "The Project"
section: "Frontend Infra"
---

We're moving on now from _code formatting_ to _code style_. This often confusing as to what we're talking about here because it's a fine hair to split. People often ask me what's the difference between Prettier and ESLint. It's confusing because there's a lot of overlap. ESLint can do some of what Prettier does.

Code formatting is very mechanical: how much indenting, how files end, where and when line breaks happen, single or double quotes. Prettier doesn't care what the code does; it just cares what the code looks like.

Code linting cares, on the other hand, what the code does. Should you use an arrow function here? Do we allow nested callbacks? Is this variable being defined before it's used? Those sorts of questions are what ESLint answers. ESLint can also handle _some_ of what Prettier does: it can do code indentation and a few other things but what we'll do is tell ESLint to not worry about those mechanical things because Prettier will pick up the slack for it.

Some people like to go hog-wild with ESLint rules and lock down the code style super hardcore. Some of you may have heard the term "the code should look like it was written by one person." I think that's bull. Like we alluded to previously, we want to minimize friction. To that end, I implore you to carefully consider each rule you choose. Don't choose rules because they look nice or because of vain personal preference. Choose rules that legitimately make developers more productive and assist them in writing code that will be definitely be easier to maintain later. Err on the side of more loose than more strict.

To this end, I do not recommend the [Airbnb][airbnb] JS rules: I find them strict for the sake of being strict. I'll show you what I recommend: a loose set of rules that help devs find mistakes faster.

## Set Up ESLint

Run this:

```bash
npm install -D eslint eslint-plugin-import eslint-config-prettier
```

Add a new file to the root of your project called `.eslintrc.json and put this into it:

```json
{
  "extends": ["eslint:recommended", "plugin:import/errors", "prettier"],
  "rules": {
    "no-console": 1
  },
  "plugins": ["import"],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  }
}
```

Add these to your scripts in `package.json`:

```json
{
  […]
  "scripts": {
    […]
    "lint": "eslint --ignore-path ./.gitignore --fix \"./**/*.{js,ts}\"",
    "lint:check": "eslint --ignore-path ./.gitignore --quiet \"./**/*.{js,ts}\"",
  }
}
```

Okay, now you should be able to run `npm run format:check` and currently it will give you an error because we have no JavaScript files in our project yet but it will work momentarily. For `format` we added the `--fix` flag so it will automatically fix problems it knows how to (it can fix some, not others.)

We have a fairly permissive config here that's really looking only for errors. I prefer it this way: let devs write code the way they know how and try and make ESLint _help_ them, not _hinder_ them. The `import` plugin will help them with gotchas around ES6 Modules. As for the `console.log` rule, I like to let people use them when necessary but still warn to make sure they know they're leaving them in.

## VSCode

Of course there is a great ESLint extension for VSCode. Let's add that now. [Install this extension][vscode]. No additional config necessary, it should just work!

[airbnb]: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
[vscode]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
