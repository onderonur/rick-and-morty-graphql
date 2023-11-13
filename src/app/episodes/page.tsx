import type { Metadata } from 'next';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getQueryClient } from '@/query-client/query-client-utils';
import EpisodeInfiniteList from '@/episodes/episode-infinite-list';
import { getMetadata } from '@/seo/seo-utils';
import Card from '@/common/card';
import CardTitle from '@/common/card-title';
import CardContent from '@/common/card-content';
import { episodeInfiniteListQueryOptions } from '@/episodes/episode-infinite-list-query';

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
