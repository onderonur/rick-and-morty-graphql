import CharacterEpisodeSummary from '@/characters/character-episodes-summary';
import CharacterSpecs from '@/characters/character-specs';
import Card from '@/common/card';
import CardContent from '@/common/card-content';
import CardImage from '@/common/card-image';
import CardTitle from '@/common/card-title';
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

export default function CharacterDetails({ character }: CharacterDetailsProps) {
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
          className="text-slate-300 text-sm"
          episodes={characterDetails.episodeSummary}
        />
        <CharacterSpecs character={characterDetails} />
      </CardContent>
    </Card>
  );
}
