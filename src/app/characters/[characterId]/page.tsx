import { graphql } from '@/core/gql';
import { getQueryClient } from '@/core/query-client/query-client.utils';
import { getMetadata } from '@/core/seo/seo.utils';
import { API_URL } from '@/core/shared/shared.utils';
import { Card, CardTitle } from '@/core/ui/components/card';
import { List } from '@/core/ui/components/list';
import { CharacterDetails } from '@/features/characters/components/character-details';
import { EpisodeListItem } from '@/features/episodes/components/episode-list-item';
import request from 'graphql-request';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

const CharacterPage_Query = graphql(/* GraphQL */ `
  query CharacterPage_Query($id: ID!) {
    character(id: $id) {
      id
      name
      image
      ...CharacterDetails_CharacterFragment
      episode {
        id
        ...EpisodeListItem_EpisodeFragment
      }
    }
  }
`);

async function getPageData(characterId: string) {
  const queryClient = getQueryClient();

  const data = await queryClient.fetchQuery({
    queryKey: ['character', characterId],
    queryFn: () =>
      request(API_URL, CharacterPage_Query, {
        id: characterId,
      }),
  });

  const { character } = data;

  if (!character) {
    notFound();
  }

  return { character };
}

type CharacterPageProps = {
  params: {
    characterId: string;
  };
};

export async function generateMetadata({
  params: { characterId },
}: CharacterPageProps): Promise<Metadata> {
  const { character } = await getPageData(characterId);

  return getMetadata({
    title: character.name,
    description: `Check out character details of "${character.name}" from Rick and Morty series.`,
    pathname: `/characters/${characterId}`,
    images:
      character.name && character.image
        ? [
            {
              url: character.image,
              alt: character.name,
            },
          ]
        : [],
  });
}

export default async function CharacterPage({
  params: { characterId },
}: CharacterPageProps) {
  const { character } = await getPageData(characterId);

  return (
    <main className="grid gap-4 md:grid-cols-[theme(spacing.80)_1fr]">
      <div className="mx-auto max-w-md">
        <CharacterDetails character={character} />
      </div>
      <section aria-labelledby="episodes-title">
        <Card>
          <CardTitle id="episodes-title" as="h2">
            Episodes
          </CardTitle>
          <List>
            {character.episode.map((episode) => {
              if (!episode) {
                return null;
              }

              return <EpisodeListItem key={episode.id} episode={episode} />;
            })}
          </List>
        </Card>
      </section>
    </main>
  );
}
