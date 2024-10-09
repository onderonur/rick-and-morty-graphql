import { graphql } from '@/core/gql';
import { getQueryClient } from '@/core/query-client/query-client.utils';
import { getMetadata } from '@/core/seo/seo.utils';
import { API_URL } from '@/core/shared/shared.utils';
import { Card, CardTitle } from '@/core/ui/components/card';
import { Specs } from '@/core/ui/components/specs';
import { CharacterCard } from '@/features/characters/components/character-card';
import { CharacterList } from '@/features/characters/components/character-list';
import request from 'graphql-request';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

const LocationPage_Query = graphql(/* GraphQL */ `
  query LocationPage_Query($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
        id
        ...CharacterCard_CharacterFragment
      }
    }
  }
`);

async function getPageData(locationId: string) {
  const queryClient = getQueryClient();

  const data = await queryClient.fetchQuery({
    queryKey: ['location', locationId],
    queryFn: () =>
      request(API_URL, LocationPage_Query, {
        id: locationId,
      }),
  });

  const { location } = data;

  if (!location) {
    notFound();
  }

  return { location };
}

type LocationPageProps = {
  params: {
    locationId: string;
  };
};

export async function generateMetadata({
  params: { locationId },
}: LocationPageProps): Promise<Metadata> {
  const { location } = await getPageData(locationId);

  return getMetadata({
    title: location.name,
    description: `Check out details of "${location.name}" location form Rick and Morty series.`,
    pathname: `/locations/${location.id}`,
  });
}

export default async function LocationPage({
  params: { locationId },
}: LocationPageProps) {
  const { location } = await getPageData(locationId);

  return (
    <main className="flex flex-col gap-4">
      <Card>
        <CardTitle>{location.name}</CardTitle>
        <Specs
          specs={[
            { title: 'Type', value: location.type },
            { title: 'Dimension', value: location.dimension },
          ]}
        />
      </Card>
      <section aria-labelledby="characters-title">
        <Card>
          <CardTitle id="characters-title" as="h2">
            Characters
          </CardTitle>
          <CharacterList>
            {location.residents.map((character) => {
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
