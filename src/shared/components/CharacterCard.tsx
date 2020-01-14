import React from "react";
import { CardHeader, CardContent, Link } from "@material-ui/core";
import BaseCard from "shared/components/BaseCard";
import BaseImage from "shared/components/BaseImage";
import TextWithLabel from "shared/components/TextWithLabel";
import RouterLink from "shared/components/RouterLink";
import gql from "graphql-tag";
import {
  Episode,
  CharacterCard_CharacterFragment,
  CharacterCard_CharacterSpecsFragment
} from "generated/graphql";

function getEpisodeAirYear(episode: Episode) {
  if (episode.air_date) {
    return new Date(episode.air_date).getFullYear();
  }
  return "";
}

type CharacterWithSpecs = CharacterCard_CharacterFragment &
  Partial<CharacterCard_CharacterSpecsFragment>;

interface CharacterCardProps {
  character: CharacterWithSpecs;
  imageAspectRatio?: string;
  hasActionArea?: boolean;
  showSpecs?: boolean;
}

function CharacterCard({
  character,
  imageAspectRatio,
  hasActionArea,
  showSpecs
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
                firstEpisode
              )} - ${getEpisodeAirYear(lastEpisode)})`
            : null
        }
      />
      {showSpecs ? (
        <CardContent>
          <TextWithLabel label="Staus" text={character.status} />}
          <TextWithLabel label="Species" text={character.species} />
          <TextWithLabel label="Gender" text={character.gender} />
          {character.origin && (
            <TextWithLabel
              label="Origin"
              text={
                <Link
                  to={`/locations/${character.origin.id}`}
                  component={RouterLink}
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
                  to={`/locations/${character.location.id}`}
                  component={RouterLink}
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

CharacterCard.fragments = {
  character: gql`
    fragment CharacterCard_character on Character {
      id
      name
      image
      episode {
        id
        air_date
      }
    }
  `,
  characterSpecs: gql`
    fragment CharacterCard_characterSpecs on Character {
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
  `
};

export default CharacterCard;
