---
title: ember-cli-webcomponents-bundler
excerpt: Ember addon for using Web Components in Ember applications.
featuredImage: images/ember-cli.png
repo: https://github.com/BBVAEngineering/ember-cli-webcomponents-bundler
demo: https://bbvaengineering.github.io/ember-cli-webcomponents-bundler/
position: 4
tags:
  - Work
  - Node
  - Broccoli
  - Rollup
  - Ember
techTags:
  - Node
  - Broccoli
  - Rollup
  - Babel
  - PostCSS
  - Autoprefixer
  - Ember-addon
  - Mocha
---

`ember-cli-webcomponents-bundler` is a work project to import and bundle Web Components using ES6 modules in an Ember application.

By default it automatically imports the generated bundle(s) and the required polyfills. This option can be disabled to import the scripts on demand (lazy loading).

It also allows to import CSS files directly from components and can generate different bundles for browsers with and without support of ES6 modules.

It uses Rollup to bundle the scripts and applies autoprefixer to imported styles based on the build settings of the host application.
