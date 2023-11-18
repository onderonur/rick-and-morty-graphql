'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { CharacterCard } from './character-card';
import { InfiniteScrollSentry } from '@/common/infinite-scroll-sentry';
import { useSearchParams } from 'next/navigation';
import { CharacterList } from './character-list';
import { characterInfiniteListQueryOptions } from './character-infinite-list-query';

export function CharacterInfiniteList() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword');
  const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery(
    characterInfiniteListQueryOptions({ keyword }),
  );

  return (
    <>
      {keyword && (
        <p>
          Search results for{' '}
          <span className="font-semibold">&quot;{keyword}&quot;</span>
        </p>
      )}
      <CharacterList>
        {data?.pages.map((page) => {
          return page.characters?.results?.map((character) => {
            if (!character) {
              return null;
            }

            return (
              <li key={character.id}>
                <CharacterCard character={character} />
              </li>
            );
          });
        })}
      </CharacterList>
      <InfiniteScrollSentry
        loading={isFetching}
        hasNextPage={hasNextPage}
        onLoadMore={fetchNextPage}
      />
    </>
  );
}
