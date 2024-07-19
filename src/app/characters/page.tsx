import { CharacterInfiniteList } from '@/characters/character-infinite-list';
import { characterInfiniteListQueryOptions } from '@/characters/character-infinite-list-query';
import { CharacterSearchForm } from '@/characters/character-search-form';
import { Card, CardContent, CardTitle } from '@/common/card';
import { getQueryClient } from '@/query-client/query-client-utils';
import { getMetadata } from '@/seo/seo-utils';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import type { Metadata } from 'next';

export const metadata: Metadata = getMetadata({
  title: 'Characters',
  description: 'Search characters of Rick and Morty series.',
  pathname: '/characters',
});

type CharactersPageProps = {
  searchParams: {
    keyword?: string;
  };
};

export default async function CharactersPage({
  searchParams: { keyword },
}: CharactersPageProps) {
  const queryClient = getQueryClient();

  await queryClient.prefetchInfiniteQuery(
    characterInfiniteListQueryOptions({ keyword: keyword ?? null }),
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Card withTitle>
        <CardTitle as="h1">Characters</CardTitle>
        <CardContent>
          <CharacterSearchForm />
          <CharacterInfiniteList />
        </CardContent>
      </Card>
    </HydrationBoundary>
  );
}
