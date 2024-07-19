'use client';

import { InfiniteScrollSentry } from '@/common/infinite-scroll-sentry';
import { List } from '@/common/list';
import { useInfiniteQuery } from '@tanstack/react-query';
import { locationInfiniteListQueryOptions } from './location-infinite-list-query';
import { LocationListItem } from './location-list-item';

export function LocationInfiniteList() {
  const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery(
    locationInfiniteListQueryOptions(),
  );

  if (!data) {
    return null;
  }

  return (
    <>
      <List>
        {data.pages.map((page) => {
          return page.locations?.results?.map((location) => {
            if (!location) {
              return null;
            }

            return <LocationListItem key={location.id} location={location} />;
          });
        })}
      </List>
      <InfiniteScrollSentry
        loading={isFetching}
        hasNextPage={hasNextPage}
        onLoadMore={fetchNextPage}
      />
    </>
  );
}
