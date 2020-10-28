import { makeVar, InMemoryCache } from "@apollo/client";

export const showDrawerVar = makeVar(false);

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
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
