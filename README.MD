# React starter app

![logos](https://user-images.githubusercontent.com/8677029/27766759-56a25066-5ea9-11e7-81e1-76c3f3d20576.png)

![screenshot](https://user-images.githubusercontent.com/8677029/27766777-2d0c686c-5eaa-11e7-9e71-488654532944.png)

This is (a) a starter application and (b) a demonstration of my solution for creating a react/redux application with Typescript.

## Features

* Complete application with dev/prod builds (builds use Webpack).
* Devtools & logging enabled on dev build.
* Basic UI written with material-ui.
* Example actions, reducers, store and models.
* Builds to ES6 (if you need ES5 in production, babel will be required to process the transpiled typescript code).
* Tests with Jest.
* Linting with ts-lint.

## Installation

```
git clone https://github.com/gavingregory/react-redux-typescript-starter
cd react-redux-typescript-starter
npm install
```

## Building

For developer build (this will remain open and watch for file changes, rebuilding automatically. To exit, type CTRL+C):
```
npm run build:dev
```

For production build:
```
npm run build:prod
```
