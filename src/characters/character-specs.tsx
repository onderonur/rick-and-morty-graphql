import NextLink from '@/common/next-link';
import Spec from '@/common/spec';
import type { FragmentType } from '@/gql';
import { graphql, useFragment } from '@/gql';

const CharacterSpecs_CharacterFragment = graphql(/* GraphQL */ `
  fragment CharacterSpecs_CharacterFragment on Character {
    id
    status
    species
    gender
    origin {
      id
      name
    }
    location {
      id
      name
    }
  }
`);

type CharacterSpecsProps = {
  character: FragmentType<typeof CharacterSpecs_CharacterFragment>;
};

export default function CharacterSpecs({ character }: CharacterSpecsProps) {
  const specs = useFragment(CharacterSpecs_CharacterFragment, character);

  return (
    <div className="flex flex-wrap gap-4">
      {specs.status && <Spec title="Status" value={specs.status} />}
      {specs.species && <Spec title="Species" value={specs.species} />}
      {specs.origin?.id && (
        <Spec
          title="Gender"
          value={
            <NextLink href={`/locations/${specs.origin.id}`}>
              {specs.origin.name}
            </NextLink>
          }
        />
      )}
      {specs.location?.id && (
        <Spec
          title="Location"
          value={
            <NextLink href={`/locations/${specs.location.id}`}>
              {specs.location.name}
            </NextLink>
          }
        />
      )}
    </div>
  );
}
