import type { Metadata } from 'next';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getQueryClient } from '@/query-client/query-client-utils';
import LocationInfiniteList from '@/locations/location-infinite-list';
import { getMetadata } from '@/seo/seo-utils';
import Card from '@/common/card';
import CardTitle from '@/common/card-title';
import CardContent from '@/common/card-content';
import { locationInfiniteListQueryOptions } from '@/locations/location-infinite-list-query';

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
