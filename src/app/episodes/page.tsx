import { Card, CardContent, CardTitle } from '@/common/card';
import { EpisodeInfiniteList } from '@/episodes/episode-infinite-list';
import { episodeInfiniteListQueryOptions } from '@/episodes/episode-infinite-list-query';
import { getQueryClient } from '@/query-client/query-client-utils';
import { getMetadata } from '@/seo/seo-utils';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import type { Metadata } from 'next';

export const metadata: Metadata = getMetadata({
  title: 'Episodes',
  description: 'Check out episodes of Rick and Morty series.',
  pathname: '/episodes',
});

export default async function EpisodesPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchInfiniteQuery(episodeInfiniteListQueryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Card withTitle>
        <CardTitle as="h1">Episodes</CardTitle>
        <CardContent>
          <EpisodeInfiniteList />
        </CardContent>
      </Card>
    </HydrationBoundary>
  );
}
