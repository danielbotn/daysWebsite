# Days website

Days is a mobile application written in react native. The source code for that project will be open sourced soon. On the other hand, this project is a "static" website to advertise the mobile app.

This project was scaffolded with the Eleventy Starter. 11ty is a static site generator. With the help of a few other tools listed below, 11ty has been turned into a reactive javascript framework, like react or angular.  
The following technology is used in the project:

- [Eleventy](https://11ty.dev) for templates and site generation.
- [Webpack](https://webpack.js.org) for straightforward JS asset bundling.
- [Alpine JS](https://github.com/alpinejs/alpine) A rugged, minimal framework for composing JavaScript behavior in your markup.
- [Tailwindcss](https://tailwindcss.com) for a utility first CSS workflow.
- [PurgeCSS](https://www.purgecss.com/) for optimizing css output.
- [Nunjucks](https://mozilla.github.io/nunjucks/) A template engine similar to pug or ejs

## Deploy this to your own site

These builders are amazing—try them out to get your own Eleventy site in a few clicks!

- [Get your own Eleventy web site on Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/eastslopestudio/eleventy-starter)
- [Get your own Eleventy web site on Vercel](https://vercel.com/import/project?template=eastslopestudio%2Feleventy-starter)

---

## Prerequisites

- [Node and NPM](https://nodejs.org/)
- [Netlify CLI](https://www.npmjs.com/package/netlify-cli) _optional_

## Running locally

```bash
# Create your project
npx degit "eastslopestudio/eleventy-starter" my-app && cd my-app

# install the project dependencies
npm install

# run the build and server locally
npm run start

# run the production build
npm run build
```

## Netlify Dev

```bash
# Install the Netlify CLI globally
npm install -g netlify-cli
netlify dev
```

Serverless functions are located in `src/functions`

A serverless functions pipeline is included via Netlify Dev. By running `netlify dev` you'll be able to execute any of your serverless functions directly like this:

- /.netlify/functions/hello

### Redirects and proxies

Netlify's Redirects API can provide friendlier URLs as proxies to these URLs.

- /api/hello

---


