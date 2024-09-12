import { getQueryClient } from '@/core/query-client/query-client.utils';
import { getMetadata } from '@/core/seo/seo.utils';
import { Card, CardTitle } from '@/core/ui/components/card';
import { EpisodeInfiniteList } from '@/features/episodes/components/episode-infinite-list';
import { episodeInfiniteListQueryOptions } from '@/features/episodes/episodes.queries';
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
      <main>
        <Card>
          <CardTitle className="text-4xl">Episodes</CardTitle>
          <EpisodeInfiniteList />
        </Card>
      </main>
    </HydrationBoundary>
  );
}
