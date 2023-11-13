'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScrollSentry from '@/common/infinite-scroll-sentry';
import List from '@/common/list';
import EpisodeListItem from './episode-list-item';
import { episodeInfiniteListQueryOptions } from './episode-infinite-list-query';

export default function EpisodeInfiniteList() {
  const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery(
    episodeInfiniteListQueryOptions(),
  );

  if (!data) {
    return null;
  }

  return (
    <>
      <List>
        {data.pages.map((page) => {
          return page.episodes?.results?.map((episode) => {
            if (!episode) {
              return null;
            }

            return <EpisodeListItem key={episode.id} episode={episode} />;
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
