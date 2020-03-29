## RickQL - Rick And Morty GraphQL App

This is a client application which consumes the Rick and Morty API.
It uses [Apollo Client](https://www.apollographql.com/docs/react/) for all the data fetching and state management.
When I first started this project, there was no official React hooks for Apollo Client.
After their release, I've migrated this project to [@apollo/react-hooks](https://www.apollographql.com/docs/react/api/react-hooks/).

The project was written in JavaScript at first. But I've migrated to TypeScript eventually.
I've used [graphql-codegen](https://graphql-code-generator.com/) to create type definitions automatically.
Also, configured Apollo to show the GraphQL errors and warnings as explained [here](https://www.apollographql.com/docs/devtools/apollo-config/).

Also, refactored the folder structure (inspired from the example made by [@ryanflorance](https://gist.github.com/ryanflorence/daafb1e3cb8ad740b346)).

The project was created with `create-react-app`, but then I wanted to try the server-side rendering and then used the most anticipated framework for that. [Next.js](https://nextjs.org/). Migrating to `Next.js` was just easy. I just changed the routing, made some configurations for `apollo` and `material-ui`. And that's it! Most of these setups can be found from the [examples] (https://github.com/zeit/next.js/tree/canary/examples) folder of `Next.js`.

**Live demo on Netlify is [here](rick-and-morty-graphql.now.sh)**.

To run it in development mode:

### `npm install`

### `npm start`

### The Rick and Morty API

This is a really cool public API which provides you the characters, locations and episodes. It has both Rest and GraphQL implementations. So, you can use it to learn and explore new techniques, libraries etc.

You can check it out [here](https://rickandmortyapi.com/).

### Now Deployment

[Zeit Now](https://zeit.co/) is one of the simplest deployment options ever. [Deployin a Next.js App](https://nextjs.org/learn/basics/deploying-a-nextjs-app) guide is just what you would need. I just downloaded the [official cli](https://zeit.co/download) and run `now`. That's it!