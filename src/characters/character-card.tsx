'use client';

import { graphql } from '@/gql/gql';
import type { FragmentType } from '@/gql';
import { useFragment } from '@/gql';
import NextLink from '@/common/next-link';
import Card from '@/common/card';
import CardImage from '@/common/card-image';
import CardTitle from '@/common/card-title';

// https://the-guild.dev/blog/unleash-the-power-of-fragments-with-graphql-codegen
const CharacterCard_CharacterFragment = graphql(/* GraphQL */ `
  fragment CharacterCard_CharacterFragment on Character {
    id
    name
    status
    image
  }
`);

type CharacterCardProps = {
  character: FragmentType<typeof CharacterCard_CharacterFragment>;
};

export default function CharacterCard({ character }: CharacterCardProps) {
  const characterFragment = useFragment(
    CharacterCard_CharacterFragment,
    character,
  );

  return (
    <NextLink href={`/characters/${characterFragment.id}`}>
      <Card className="overflow-hidden">
        <div className="relative aspect-square">
          <CardImage
            src={characterFragment.image as string}
            alt={characterFragment.name as string}
            fill
          />
        </div>
        <CardTitle>{characterFragment.name}</CardTitle>
      </Card>
    </NextLink>
  );
}
