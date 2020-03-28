## RickQL - Rick And Morty GraphQL App

This is a client application which consumes the Rick and Morty API.
It uses [Apollo Client](https://www.apollographql.com/docs/react/) for all the data fetching and state management.
When I first started this project, there was no official React hooks for Apollo Client.
After their release, I've migrated this project to [@apollo/react-hooks](https://www.apollographql.com/docs/react/api/react-hooks/).

The project was written in JavaScript at first. But I've migrated to TypeScript eventually.
I've used [graphql-codegen](https://graphql-code-generator.com/) to create type definitions automatically.
Also, configured Apollo to show the GraphQL errors and warnings as explained [here](https://www.apollographql.com/docs/devtools/apollo-config/).

Also, refactored the folder structure (inspired from the example made by [@ryanflorance](https://gist.github.com/ryanflorence/daafb1e3cb8ad740b346)).

**Live demo on Netlify is [here](https://rick-and-morty-graphql.netlify.com/)**.

To run it in development mode:

### `npm install`

### `npm start`

### The Rick and Morty API

This is a really cool public API which provides you the characters, locations and episodes. It has both Rest and GraphQL implementations. So, you can use it to learn and explore new techniques, libraries etc.

You can check it out [here](https://rickandmortyapi.com/).

### Netlify Deployment

You can see the configurations for [Netlify](https://www.netlify.com/) in the `netlify.toml` file. These configurations are required for Single Page Applications to run correctly when deployed to Netlify. Otherwise, application won't be loaded if you refresh the page when you are not at the root of the app (like if you have a search query, url param or routing path etc.) or directly enter a Url like these.

This configuration specifies the build command, output folder for the build process and it tells Netlify to return the `index.html` file for every possible path (`/*`).
