import React from 'react';
import { CardHeader, CardContent } from '@material-ui/core';
import BaseCard from '@/common/BaseCard';
import BaseImage from '@/common/BaseImage';
import gql from 'graphql-tag';
import {
  CharacterCard_CharacterFragment,
  CharacterCard_CharacterWithSpecsFragment,
} from '@/generated/graphql';
import { isOfType, UNKNOWN } from '@/common/CommonUtils';
import LabeledTextList from '../common/LabeledTextList';
import { ArrayElement } from '@/common/CommonTypes';
import { routes } from '@/routing/routes';

function getEpisodeAirYear(
  episode: ArrayElement<CharacterCard_CharacterFragment['episode']>,
) {
  if (episode?.air_date) {
    return new Date(episode.air_date).getFullYear();
  }
  return '';
}

function hasSpecs(
  character:
    | CharacterCard_CharacterFragment
    | CharacterCard_CharacterWithSpecsFragment,
): character is CharacterCard_CharacterWithSpecsFragment {
  return isOfType<CharacterCard_CharacterWithSpecsFragment>(character, [
    'status',
    'species',
    'origin',
    'gender',
    'location',
  ]);
}

interface CharacterCardProps {
  character:
    | CharacterCard_CharacterFragment
    | CharacterCard_CharacterWithSpecsFragment;
  hasActionArea?: boolean;
}

function CharacterCard({ character, hasActionArea }: CharacterCardProps) {
  const { episode } = character;

  const firstEpisode = episode ? episode[0] : null;
  const lastEpisode = episode ? episode[episode.length - 1] : null;

  return (
    <BaseCard hasActionArea={hasActionArea}>
      {character.image && character.name && (
        <BaseImage
          src={character.image}
          alt={character.name}
          height={3}
          width={4}
          layout="responsive"
          objectFit="cover"
        />
      )}
      <CardHeader
        title={character.name}
        subheader={
          firstEpisode && lastEpisode
            ? `Episodes: ${episode?.length} (${getEpisodeAirYear(
                firstEpisode,
              )} - ${getEpisodeAirYear(lastEpisode)})`
            : null
        }
      />
      {hasSpecs(character) ? (
        <CardContent>
          <LabeledTextList
            data={[
              { label: 'Status', text: character.status },
              { label: 'Species', text: character.species },
              { label: 'Gender', text: character.gender },
              {
                label: 'Origin',
                text: character.origin?.name ?? UNKNOWN,
                href: character.origin?.id
                  ? routes.location({
                      params: { id: character.origin.id },
                    })
                  : undefined,
              },
              {
                label: 'Location',
                text: character.location?.name ?? UNKNOWN,
                href: character.location?.id
                  ? routes.location({
                      params: { id: character.location.id },
                    })
                  : undefined,
              },
            ]}
          />
        </CardContent>
      ) : null}
    </BaseCard>
  );
}

const characterFragment = gql`
  fragment CharacterCard_character on Character {
    id
    name
    image
    episode {
      id
      air_date
    }
  }
`;

CharacterCard.fragments = {
  character: characterFragment,
  characterWithSpecs: gql`
    fragment CharacterCard_characterWithSpecs on Character {
      ...CharacterCard_character
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
    ${characterFragment}
  `,
};

export default CharacterCard;
