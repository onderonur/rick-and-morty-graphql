import { CharacterEpisodeSummary } from '@/characters/character-episodes-summary';
import { CharacterSpecs } from '@/characters/character-specs';
import { Card, CardContent, CardImage, CardTitle } from '@/common/card';
import type { FragmentType } from '@/gql';
import { graphql, useFragment } from '@/gql';

const CharacterDetails_CharacterFragment = graphql(/* GraphQL */ `
  fragment CharacterDetails_CharacterFragment on Character {
    id
    name
    image
    ...CharacterSpecs_CharacterFragment
    episodeSummary: episode {
      ...CharacterEpisodeSummary_EpisodeFragment
    }
  }
`);

type CharacterDetailsProps = {
  character: FragmentType<typeof CharacterDetails_CharacterFragment>;
};

export function CharacterDetails({ character }: CharacterDetailsProps) {
  const characterDetails = useFragment(
    CharacterDetails_CharacterFragment,
    character,
  );

  return (
    <Card>
      <div className="relative aspect-square">
        <CardImage
          src={characterDetails.image as string}
          alt={characterDetails.name as string}
          priority
          fill
        />
      </div>
      <CardTitle as="h1" className="text-xl">
        {characterDetails.name}
      </CardTitle>
      <CardContent>
        <CharacterEpisodeSummary
          className="text-sm text-slate-300"
          episodes={characterDetails.episodeSummary}
        />
        <CharacterSpecs character={characterDetails} />
      </CardContent>
    </Card>
  );
}
