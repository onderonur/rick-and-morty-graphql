import { CharacterList } from '@/characters/character-list';
import { CharacterCard } from '@/characters/character-card';
import { Card, CardContent, CardTitle } from '@/common/card';
import { API_URL } from '@/common/common-utils';
import { graphql } from '@/gql';
import { getQueryClient } from '@/query-client/query-client-utils';
import request from 'graphql-request';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getMetadata } from '@/seo/seo-utils';

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
    <div className="flex flex-col gap-2">
      <Card>
        <CardContent>
          <div className="flex flex-wrap justify-between gap-3">
            <div>
              <h1 className="text-lg font-semibold">{episode.name}</h1>
              <p className="mt-2 text-slate-400">{episode.episode}</p>
            </div>
            <div className="text-slate-400">{episode.air_date}</div>
          </div>
        </CardContent>
      </Card>
      <section>
        <Card withTitle>
          <CardTitle as="h2">Characters</CardTitle>
          <CardContent>
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
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
