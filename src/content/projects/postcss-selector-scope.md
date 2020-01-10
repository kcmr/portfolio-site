---
title: PostCSS Selector Scope
excerpt: PostCSS plugin to scope global styles using :not() pseudo-class.
featuredImage: images/postcss.png
repo: https://github.com/BBVAEngineering/postcss-selector-scope
position: 6
tags:
  - Work
  - Node
  - PostCSS
  - Web Components
techTags:
  - Node
  - PostCSS
  - Jest
---

PostCSS Selector Scope is a work project that arises from the need to apply some kind of encapsulation for application global styles to prevent undesired styles having effect over Web Components in browsers without Shadow DOM support.

It uses the default selector (`:not(.style-scope)`) applied by the [ShadyCSS library](https://github.com/webcomponents/polyfills/tree/master/packages/shadycss) but it can be customized to fit different needs.

ShadyCSS only can scope styles that are inside a `<template>` element (Polymer's `<custom-style>` tag), so the plugin does the same but over CSS files.
