## RickQL - Rick And Morty GraphQL App

This is a client application which consumes the Rick and Morty API.

It uses React Server Components and [TanStack Query](https://www.apollographql.com/docs/react/) for all the data fetching.

The project was written in JavaScript at first. But it was migrated to TypeScript eventually.

I've used [GraphQL Code Generator](https://the-guild.dev/graphql/codegen) to create type definitions automatically.

A feature based folder structure has been implemented to keep things organized.

**Live demo is [here](https://rick-and-morty-graphql.vercel.app/)**.

- [Next.js](https://nextjs.org/)
- [TanStack Query](https://tanstack.com/query/latest)
- [NES.css](https://nostalgic-css.github.io/NES.css/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GraphQL Code Generator](https://the-guild.dev/graphql/codegen)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Vercel](https://vercel.com/)

## Development

First, we need to install the dependencies:

```bash
npm install
```

And run the project in development mode:

```bash
npm run dev
```

## The Rick and Morty API

This is a really cool public API which provides you the characters, locations and episodes. It has both Rest and GraphQL implementations. So, you can use it to learn and explore new techniques, libraries etc.

You can check it out [here](https://rickandmortyapi.com/).
