import { getQueryClient } from '@/core/query-client/query-client.utils';
import { searchParamParser } from '@/core/routing/routing.schemas';
import type { SearchParams } from '@/core/routing/routing.types';
import { parseSearchParams } from '@/core/routing/routing.utils';
import { getMetadata } from '@/core/seo/seo.utils';
import { Card, CardTitle } from '@/core/ui/components/card';
import { characterInfiniteListQueryOptions } from '@/features/characters/characters.queries';
import { CharacterInfiniteList } from '@/features/characters/components/character-infinite-list';
import { CharacterSearchForm } from '@/features/characters/components/character-search-form';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import type { Metadata } from 'next';
import { z } from 'zod';

const searchParamsSchema = z
  .object({
    keyword: searchParamParser.toSingle(z.string()),
  })
  .partial();

export const metadata: Metadata = getMetadata({
  title: 'Characters',
  description: 'Search characters of Rick and Morty series.',
  pathname: '/characters',
});

type CharactersPageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function CharactersPage(props: CharactersPageProps) {
  const searchParams = await props.searchParams;
  const { keyword } = parseSearchParams({
    searchParamsSchema,
    searchParams,
  });

  const queryClient = getQueryClient();

  await queryClient.prefetchInfiniteQuery(
    characterInfiniteListQueryOptions({
      keyword: keyword ?? null,
    }),
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="flex flex-col gap-2">
        <Card>
          <CardTitle className="text-2xl">Characters</CardTitle>
          <div className="flex flex-col gap-4">
            <CharacterSearchForm />
            {keyword && (
              <p className="text-muted-foreground">
                Search results for{' '}
                <span className="font-semibold text-foreground">
                  &quot;{keyword}&quot;
                </span>
              </p>
            )}
          </div>
        </Card>
        <CharacterInfiniteList />
      </main>
    </HydrationBoundary>
  );
}
