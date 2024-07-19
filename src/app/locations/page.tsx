import { Card, CardContent, CardTitle } from '@/common/card';
import { LocationInfiniteList } from '@/locations/location-infinite-list';
import { locationInfiniteListQueryOptions } from '@/locations/location-infinite-list-query';
import { getQueryClient } from '@/query-client/query-client-utils';
import { getMetadata } from '@/seo/seo-utils';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import type { Metadata } from 'next';

export const metadata: Metadata = getMetadata({
  title: 'Locations',
  description: 'Check out locations from Rick and Morty series.',
  pathname: '/locations',
});

export default async function LocationsPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchInfiniteQuery(locationInfiniteListQueryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Card withTitle>
        <CardTitle as="h1">Locations</CardTitle>
        <CardContent>
          <LocationInfiniteList />
        </CardContent>
      </Card>
    </HydrationBoundary>
  );
}
