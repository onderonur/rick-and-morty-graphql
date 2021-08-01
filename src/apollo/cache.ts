import { Maybe, PageInfoFragment } from "@/generated/graphql";
import { makeVar, InMemoryCache, FieldPolicy } from "@apollo/client";

export const showDrawerVar = makeVar(false);

interface PaginationResult<Item = unknown> {
  info: PageInfoFragment;
  results: Item[];
}

function mergePagination(keyArgs?: string[]): FieldPolicy {
  return {
    // We use `keyArgs` instead of @connection directive
    // https://www.apollographql.com/docs/react/pagination/key-args/#the-connection-directive
    keyArgs: keyArgs ?? false,
    merge: (existing: Maybe<PaginationResult>, incoming: PaginationResult) => {
      return {
        ...incoming,
        results: existing
          ? [...existing.results, ...incoming.results]
          : incoming.results,
      };
    },
  };
}

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        characters: mergePagination(["filter"]),
        locations: mergePagination(),
        episodes: mergePagination(),
        showDrawer: {
          read() {
            return showDrawerVar();
          },
        },
      },
    },
  },
});

export default cache;
