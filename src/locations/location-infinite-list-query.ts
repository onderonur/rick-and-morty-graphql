// Since we use `locationInfiniteListQueryOptions` in both server and client components,
// we can not colocate it with `LocationInfiniteList`, because it is a client component.
// So, we created a separate file for the query.
import { API_URL, FIRST_PAGE } from '@/common/common-utils';
import { graphql } from '@/gql';
import { infiniteQueryOptions } from '@tanstack/react-query';
import request from 'graphql-request';

const LocationInfiniteList_Query = graphql(/* GraphQL */ `
  query LocationInfiniteList_Query($page: Int) {
    locations(page: $page) {
      info {
        next
      }
      results {
        id
        ...LocationListItem_LocationFragment
      }
    }
  }
`);

export function locationInfiniteListQueryOptions() {
  return infiniteQueryOptions({
    initialPageParam: FIRST_PAGE,
    queryKey: ['locations'],
    queryFn: ({ pageParam }) =>
      request(API_URL, LocationInfiniteList_Query, {
        page: pageParam,
      }),
    getNextPageParam: (lastPage) => lastPage.locations?.info?.next,
  });
}
