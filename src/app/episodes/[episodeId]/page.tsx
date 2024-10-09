import { graphql } from '@/core/gql';
import { getQueryClient } from '@/core/query-client/query-client.utils';
import { getMetadata } from '@/core/seo/seo.utils';
import { API_URL } from '@/core/shared/shared.utils';
import { Card, CardDescription, CardTitle } from '@/core/ui/components/card';
import { CharacterCard } from '@/features/characters/components/character-card';
import { CharacterList } from '@/features/characters/components/character-list';
import request from 'graphql-request';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

const EpisodePage_Query = graphql(/* GraphQL */ `
  query EpisodePage_Query($id: ID!) {
    episode(id: $id) {
      id
      name
      episode
      air_date
      characters {
        id
        ...CharacterCard_CharacterFragment
      }
    }
  }
`);

async function getPageData(episodeId: string) {
  const queryClient = getQueryClient();

  const data = await queryClient.fetchQuery({
    queryKey: ['episode', episodeId],
    queryFn: () =>
      request(API_URL, EpisodePage_Query, {
        id: episodeId,
      }),
  });

  const { episode } = data;

  if (!episode) {
    notFound();
  }

  return { episode };
}

type EpisodePageProps = {
  params: {
    episodeId: string;
  };
};

export async function generateMetadata({
  params: { episodeId },
}: EpisodePageProps): Promise<Metadata> {
  const { episode } = await getPageData(episodeId);

  return getMetadata({
    title: episode.name,
    description: `Check out details of "${episode.name}" episode of Rick and Morty series.`,
    pathname: `/episodes/${episode.id}`,
  });
}

export default async function EpisodePage({
  params: { episodeId },
}: EpisodePageProps) {
  const { episode } = await getPageData(episodeId);

  return (
    <main className="flex flex-col gap-4">
      <Card>
        <div className="flex flex-wrap justify-between gap-3">
          <div className="flex flex-col gap-2">
            <CardTitle>{episode.name}</CardTitle>
            <CardDescription>{episode.episode}</CardDescription>
          </div>
          <CardDescription>{episode.air_date}</CardDescription>
        </div>
      </Card>
      <section aria-labelledby="characters-title">
        <Card>
          <CardTitle id="characters-title" as="h2">
            Characters
          </CardTitle>
          <CharacterList>
            {episode.characters.map((character) => {
              if (!character) {
                return null;
              }

              return (
                <li key={character.id}>
                  <CharacterCard character={character} />
                </li>
              );
            })}
          </CharacterList>
        </Card>
      </section>
    </main>
  );
}
