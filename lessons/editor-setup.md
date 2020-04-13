---
path: "/editor-setup"
title: "Editor Setup"
order: "2E"
description: "The Project"
section: "Frontend Infra"
---

Let's quickly add one more file to our project that makes everything run a bit more smoothly for everyone on the team. There's a project called [EditorConfig][editorconfig]. EditorConfig is a file that tells your editor how to set all the settings (indent, spacing, end-of-file characters, etc.) so your editor maintains a consistent setup. Prettier would ultimately fix all the problems upon save but it's just helpful to have it work continually and not have to fiddle with your editor.

Add the following to the root of your project and call it `.editorconfig`.

```.editorconfig
root = true

[*]
end_of_line = lf
insert_final_newline = true
charset = utf-8
indent_style = space
indent_size = 2
```

This is about as basic as you can get. Feel free to customize your style. You can also configure it by file type e.g. you can have two spaces in JavaScript and four in Python. This basic one suits our needs.

## VSCode

Be sure to nab [the extension][vscode] for VSCode too. This is what will set your editor up when you have an `.editorconfig` file in your project.

## Prettier

One neat part of this setup is that Prettier by default reads `.editorconfig` files and incorporates the settings, no additional setup or duplication needed.

[editorconfig]: https://editorconfig.org/
[vscode]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
