// OK
import React from "react";
import { CardHeader, CardContent } from "@material-ui/core";
import TextWithLabel from "./TextWithLabel";
import BaseImage from "./BaseImage";
import BaseCard from "./BaseCard";

function CharacterCard({
  character,
  imageAspectRatio,
  hasActionArea,
  showSpecs
}) {
  const { episode } = character;
  const firstEpisodeDate = episode ? new Date(episode[0].air_date) : null;
  const lastEpisodeDate = episode
    ? new Date(episode[episode.length - 1].air_date)
    : null;

  return (
    <BaseCard hasActionArea={hasActionArea}>
      <BaseImage src={character.image} aspectRatio={imageAspectRatio} />
      <CardHeader
        title={character.name}
        subheader={
          episode
            ? `Episodes:
  ${
    episode.length
  } (${firstEpisodeDate.getFullYear()} - ${lastEpisodeDate.getFullYear()})`
            : null
        }
      />
      {showSpecs ? (
        <CardContent>
          <TextWithLabel label="Staus" text={character.status} />
          <TextWithLabel label="Species" text={character.species} />
          <TextWithLabel label="Gender" text={character.gender} />
          <TextWithLabel label="Origin" text={character.origin.name} />
          <TextWithLabel label="Location" text={character.location.name} />
        </CardContent>
      ) : null}
    </BaseCard>
  );
}

export default CharacterCard;
