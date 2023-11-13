import type { Metadata } from 'next';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getQueryClient } from '@/query-client/query-client-utils';
import CharacterInfiniteList from '@/characters/character-infinite-list';
import CharacterSearchForm from '@/characters/character-search-form';
import { getMetadata } from '@/seo/seo-utils';
import Card from '@/common/card';
import CardContent from '@/common/card-content';
import CardTitle from '@/common/card-title';
import { characterInfiniteListQueryOptions } from '@/characters/character-infinite-list-query';

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
