import { getQueryClient } from '@/core/query-client/query-client.utils';
import { getMetadata } from '@/core/seo/seo.utils';
import { Card, CardTitle } from '@/core/ui/components/card';
import { characterInfiniteListQueryOptions } from '@/features/characters/characters.queries';
import { CharacterInfiniteList } from '@/features/characters/components/character-infinite-list';
import { CharacterSearchForm } from '@/features/characters/components/character-search-form';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import type { Metadata } from 'next';

export const metadata: Metadata = getMetadata({
  title: 'Characters',
  description: 'Search characters of Rick and Morty series.',
  pathname: '/characters',
});

type CharactersPageProps = {
  searchParams: Promise<{
    keyword?: string;
  }>;
};

export default async function CharactersPage(props: CharactersPageProps) {
  const { keyword } = await props.searchParams;

  const queryClient = getQueryClient();

  await queryClient.prefetchInfiniteQuery(
    characterInfiniteListQueryOptions({ keyword: keyword ?? null }),
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="flex flex-col gap-6">
        <Card>
          <CardTitle className="text-4xl">Characters</CardTitle>
          <div className="flex flex-col gap-6">
            <CharacterSearchForm />
            {keyword && (
              <p className="text-lg text-muted">
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
