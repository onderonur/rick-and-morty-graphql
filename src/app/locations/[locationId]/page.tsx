import CharacterList from '@/characters/character-list';
import CharacterCard from '@/characters/character-card';
import Card from '@/common/card';
import CardContent from '@/common/card-content';
import CardTitle from '@/common/card-title';
import { API_URL } from '@/common/common-utils';
import { graphql } from '@/gql';
import { getQueryClient } from '@/query-client/query-client-utils';
import request from 'graphql-request';
import { notFound } from 'next/navigation';
import Spec from '@/common/spec';
import type { Metadata } from 'next';
import { getMetadata } from '@/seo/seo-utils';

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

  if (!location) {
    return notFound();
  }

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
    <div className="flex flex-col gap-2">
      <Card>
        <CardContent>
          <h1 className="text-lg font-semibold">{location.name}</h1>
          <div className="flex flex-wrap gap-4">
            <Spec title="Type" value={location.type} />
            <Spec title="Dimension" value={location.dimension} />
          </div>
        </CardContent>
      </Card>
      <section>
        <Card withTitle>
          <CardTitle as="h2">Characters</CardTitle>
          <CardContent>
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
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
