---
path: "/code-formatting"
title: "Code Formatting"
order: "2D"
description: "The Project"
section: "Frontend Infra"
---

## Code formatting

Literally my favorite JavaScript project is [Prettier][prettier]. You can probably tell because it is in _all_ of my courses. Prettier allows you to define of how you code is formatted: tabs or spaces, two or four spaces, semi-colons or not, single or double quotes, etc. It then _automatically_ formats your code for you, meaning you get to shut down the "thread" of your brain that worries about formatting your code and just focus on problem solving. Beyond that, you get to stop [bikeshedding][bs] about these rules with your co-workers since the formatter works the same for everyone. Let's add it to our project!

Run the following!

```bash
npm install -D prettier
```

Then add this file to the root of the project and call it `.prettierrc`.

```json
{}
```

This is where you would configure Prettier's options but we're just going to use all the defaults. Feel free to poke around the Prettier website if you want to configure it.

Add the following two commands to your npm scripts:

```json
{
  […]
  "scripts": {
    […]
    "format": "prettier --ignore-path ./.gitignore --write \"./**/*.{html,json,js,ts,css}\"",
    "format:check": "prettier ./.gitignore --check \"./**/*.{html,json,js,ts,css}\""
  }
}
```

So we added two commands: one that will fix all of our problems, and one that will check for problems. The former is the one we use before we commit code to reformat everything. The latter we could make run in a CI/CD (continuous integration / continuous delivery) platform like Azure Pipelines, GitHub Actions, Travis CI, etc. to make sure all code is formatted with Prettier before we deploy it. This is what I was talking about "being automated". Now we can make the enforcement of our code style automatic.

Notice the `--ignore-path` too. Normally we'd make a `.prettierignore` file with our wanted paths to ignore (we don't want to format nor check files that are machine-generated, just the ones we write outselves) but our `.gitignore` is actually the same so it works perfectly and we can use the one file for both purposes.

## Integration with VSCode

We write the above commands in case we're working with a team member that doesn't want to use the same setup we are. They can always run `npm run format` and everything will work. But we can be even more efficient. In VSCode, [install this extension][vscode-prettier].

Now we can set up Prettier to run Prettier every single time we save, meaning we never have to think about running the npm command. It just happens! It's very convenient. Once the extension is installed, I want you to go change two settings in VSCode.

First one is `Editor: Format on Save`. This will cause the formatter to run every time you save. The next one is `Prettier: Require Config`. This will make it so Prettier will only run on projects that have a `.prettierrc` so you don't have to worry about turing the extension on and off. Now every time you save it'll run Prettier!

[prettier]: https://prettier.io/
[bs]: https://en.wiktionary.org/wiki/bikeshedding
[vscode-prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
