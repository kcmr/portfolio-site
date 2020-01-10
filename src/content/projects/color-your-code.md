---
title: Color Your Code
excerpt: Desktop webapp to customize VS Code themes. Made with Web Components and Custom CSS Properties.
featuredImage: images/color-your-code.png
repo: https://github.com/kcmr/color-your-code
demo: https://color-your-code.firebaseapp.com/
position: 2
tags:
  - Own project
  - LitElement
  - Web Components
  - CSS
techTags:
  - Web Components
  - LitElement
  - Gulp
  - Sass
  - Custom CSS Properties
  - Mocha
---

Color Your Code is a desktop web application to facilitate the customization of Visual Studio Code themes by providing a color picker (the OS native picker that comes with `input[type="color"]`) that lets you choose colors for different parts of the editor.

It uses Custom CSS Properties to allow the live preview of the changes and build the final `theme.json` that you can download when you finish editing a theme.

It was my first LitElement project (previously it used Polymer 3) and it was really a challenge to replicate the interface of the editor with CSS (almost “pixel perfect”).
