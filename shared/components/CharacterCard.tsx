import React from "react";
import { CardHeader, CardContent, Link } from "@material-ui/core";
import BaseCard from "./BaseCard";
import BaseImage from "./BaseImage";
import TextWithLabel from "./TextWithLabel";
import RouterLink from "./RouterLink";
import gql from "graphql-tag";
import {
  Episode,
  CharacterCard_CharacterFragment,
  CharacterCard_CharacterWithSpecsFragment,
} from "../../generated/graphql";
import { isOfType } from "../utils";
import NextLink from "./NextLink";

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
            ? `Episodes:${episode?.length} (${getEpisodeAirYear(
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
                <Link
                  href="/locations/[id]"
                  as={`/locations/${character.origin.id}`}
                  component={NextLink}
                >
                  {character.origin.name}
                </Link>
              }
            />
          )}
          {character.location && (
            <TextWithLabel
              label="Location"
              text={
                <Link
                  href="/locations/[id]"
                  as={`/locations/${character.location.id}`}
                  component={NextLink}
                >
                  {character.location.name}
                </Link>
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
