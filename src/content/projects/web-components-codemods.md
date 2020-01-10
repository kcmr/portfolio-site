---
title: Web Components Codemods
excerpt: A small collection (for now) of scripts and a CLI to change or fix existing code in mass using AST transformations.
featuredImage: images/kodemod.png
repo: https://github.com/kcmr/web-components-codemods
position: 1
tags:
  - Own project
  - Node
  - JSCodeshift
  - AST
  - CLI
techTags:
  - Node
  - AST
  - JSCodeshift
  - Jest
  - CLI
  - Inquirer
  - Yargs
---

Codemods are scripts that use the AST information of another scripts to perform some transformations. They're usually used to migrate existing code to new versions of a particular library or framework, adapt code to breaking changes or update code to fit style conventions.

The main benefit of using AST transformations versus other techniques (regular expressions), is that it doesn't matter how the code is written but its meaning. In addition, [JSCodeshift](https://github.com/facebook/jscodeshift), the library used to make the transformations, preserves the style of the original code as much as possible.

The tool includes a custom CLI to improve the usability of the `jscodeshift` tool, that requires passing all the params for the transform scripts as command flags.
