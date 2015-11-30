# React Keystone Boilerplate

## About

This stack is adapted from the [React Redux Universal Hot Example](https://github.com/erikras/react-redux-universal-hot-example). Most notable is the removal of the API server and the addition of Keystone. Features include:

* Universal JS rendering
* Both client and server make API calls to the server
* [Keystone CMS](http://keystone.js.com)
* [React](https://github.com/facebook/react)
* [React Router](https://github.com/rackt/react-router)
* [Express](http://expressjs.com)
* [Babel](http://babeljs.io) for ES6 and ES7 magic
* [Webpack](http://webpack.github.io) for bundling
* [Webpack Dev Middleware](http://webpack.github.io/docs/webpack-dev-middleware.html)
* [Webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware)
* [Redux](https://github.com/rackt/redux)'s futuristic [Flux](https://facebook.github.io/react/blog/2014/05/06/flux.html) implementation
* [Redux Dev Tools](https://github.com/gaearon/redux-devtools) for next generation DX (developer experience). Watch [Dan Abramov's talk](https://www.youtube.com/watch?v=xsSnOQynTHs).
* [Redux Router](https://github.com/rackt/redux-router) Keep your router state in your Redux store
* [ESLint](http://eslint.org) to maintain a consistent code style

## Installation

* [Install Node](https://nodejs.org/en/download/)
* [Install MongoDB](https://docs.mongodb.org/master/installation/#installation-guides)
* Install dependencies by running `npm install`

## Running Dev Server

* First terminal: `mongod` (leave this running)
* Second terminal: `npm run dev`

## Building and Running Production Server

* Build assets: `npm run build`
* Start mongo (first terminal): `mongod`
* Start server (second terminal): `npm run start`