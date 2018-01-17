# React starter app

![logos](https://user-images.githubusercontent.com/8677029/27766759-56a25066-5ea9-11e7-81e1-76c3f3d20576.png)

![screenshot](https://user-images.githubusercontent.com/8677029/35022013-a0fe03a4-fb01-11e7-839a-50e2527db1f0.png)

This is a starter application, intended as a base to build react applications with redux and typescript.

## Features

* Complete application with dev/prod builds (builds use Webpack).
* Devtools & logging enabled on dev build.
* UI components with semantic-ui.
* Example actions, reducers, store and models.
* Builds to ES6 (if you need ES5 in production, babel will be required to process the transpiled typescript code).
* Tests with Jest.
* Linting with ts-lint.

## Installation

```
git clone https://github.com/gavingregory/react-redux-typescript-starter
cd react-redux-typescript-starter
yarn install
```

## Building

For developer build (this will remain open and watch for file changes, rebuilding automatically. To exit, type CTRL+C):
```
yarn run build:dev
```

For production build:
```
yarn run build:prod
```
