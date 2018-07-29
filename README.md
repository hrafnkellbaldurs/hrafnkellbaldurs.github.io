# hrafnkellbaldurs.github.io

A portfolio website showcasing the highlights of my creative and development work over the years.

## Installing

```bash
npm install
```

## Development

Parcel is used as a build tool for this website.
To start a dev server with hot module replacement, run `npm start`. 
A window will be opened in your default browser with the website running.


## Production

This repository is indended to be a static website with GitHub Pages as it's server.
In order for GitHub pages to serve a the code that we want (production code), we have to have
the production code on the `master` branch. I'd prefer not to have to do that (I'd rather have prod code on a `gh-pages` branch)

To run a production build, run `npm run prod`.
To run a production build and push from `source` to `master` the prod code, run `npm run deploy`
