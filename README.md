<div align="center">

![Days Logo](https://i.ibb.co/MGYRd2t/days-github-logo.png)

[Click here to go to Days Demo website](http://stale-acoustics.surge.sh/)

</div>

<p align="center" color="#6a737d">
  A simple static website used to display information about a mobile app.
</p>

<div align="center">

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/makes-people-smile.svg)](http://forthebadge.com)
</div>

<div align="center">

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

</div>

Days is a mobile application written in react native. The source code for that project will be open sourced soon. On the other hand, this project is a "static" website to advertise the mobile app.

This project was scaffolded with the Eleventy Starter. 11ty is a static site generator. With the help of a few other tools listed below, 11ty has been turned into a reactive javascript framework, like react or angular.  
The following technology is used in the project:

- [Eleventy](https://11ty.dev) for templates and site generation.
- [Webpack](https://webpack.js.org) for straightforward JS asset bundling.
- [Alpine JS](https://github.com/alpinejs/alpine) A rugged, minimal framework for composing JavaScript behavior in your markup.
- [Tailwindcss](https://tailwindcss.com) for a utility first CSS workflow.
- [PurgeCSS](https://www.purgecss.com/) for optimizing css output.
- [Nunjucks](https://mozilla.github.io/nunjucks/) A template engine similar to pug or ejs

---

## Prerequisites

- [Node and NPM](https://nodejs.org/)

## Running locally

```bash
# install the project dependencies
npm install

# run the build and server locally
npm run start

# add env variables in script tag using browserify and envify
browserify app.js -t [envify --YOUR_ENV_VARIABLE yourEnvString] > bundle.js

# run the production build
npm run build
```

## Deployment

```bash
# Here we are using surge for deployment
# path http://stale-acoustics.surge.sh/ --> name stale-acoustics.surge.sh

# build browserify
browserify app.js -t [envify --DAYS_SECRET_KEY my-super-secre-key --DAYS_SECRET_PASSWORD my-super-secret-password] > bundle.js

# build
npm run build

# For production deployment on surge
surge dist
```