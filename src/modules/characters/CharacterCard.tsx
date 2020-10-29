import React from "react";
import { CardHeader, CardContent, Link } from "@material-ui/core";
import BaseCard from "@/modules/shared/BaseCard";
import BaseImage from "@/modules/shared/BaseImage";
import TextWithLabel from "@/modules/shared/TextWithLabel";
import gql from "graphql-tag";
import {
  Episode,
  CharacterCard_CharacterFragment,
  CharacterCard_CharacterWithSpecsFragment,
} from "@/generated/graphql";
import { isOfType } from "@/modules/shared/SharedUtils";
import NextLink from "@/modules/shared/NextLink";

function getEpisodeAirYear(episode: Episode) {
  if (episode.air_date) {
    return new Date(episode.air_date).getFullYear();
  }
  return "";
}

function hasSpecs(
  character:
    | CharacterCard_CharacterFragment
    | CharacterCard_CharacterWithSpecsFragment,
): character is CharacterCard_CharacterWithSpecsFragment {
  return isOfType<CharacterCard_CharacterWithSpecsFragment>(character, [
    "status",
    "species",
    "origin",
    "gender",
    "location",
  ]);
}

interface CharacterCardProps {
  character:
    | CharacterCard_CharacterFragment
    | CharacterCard_CharacterWithSpecsFragment;
  imageAspectRatio?: string;
  hasActionArea?: boolean;
}

function CharacterCard({
  character,
  imageAspectRatio,
  hasActionArea,
}: CharacterCardProps) {
  const { episode } = character;

  const firstEpisode = episode ? episode[0] : null;
  const lastEpisode = episode ? episode[episode.length - 1] : null;

  return (
    <BaseCard hasActionArea={hasActionArea}>
      {character.image && character.name && (
        <BaseImage
          src={character.image}
          alt={character.name}
          aspectRatio={imageAspectRatio}
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
          <TextWithLabel label="Status" text={character.status} />
          <TextWithLabel label="Species" text={character.species} />
          <TextWithLabel label="Gender" text={character.gender} />
          {character.origin && (
            <TextWithLabel
              label="Origin"
              text={
                character.origin.id ? (
                  <Link
                    href={`/locations/${character.origin.id}`}
                    component={NextLink}
                  >
                    {character.origin.name}
                  </Link>
                ) : (
                  character.origin.name
                )
              }
            />
          )}
          {character.location && (
            <TextWithLabel
              label="Location"
              text={
                character.location.id ? (
                  <Link
                    href={`/locations/${character.location.id}`}
                    component={NextLink}
                  >
                    {character.location.name}
                  </Link>
                ) : (
                  character.location.name
                )
              }
            />
          )}
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
