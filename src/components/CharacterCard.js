import React from "react";
import { CardHeader, CardContent, CardActionArea } from "@material-ui/core";
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
  const firstEpisodeDate = new Date(episode[0].air_date);
  const lastEpisodeDate = new Date(episode[episode.length - 1].air_date);

  const content = (
    <>
      <BaseImage src={character.image} aspectRatio={imageAspectRatio} />
      <CardHeader
        title={character.name}
        subheader={`Episodes:
  ${
    episode.length
  } (${firstEpisodeDate.getFullYear()} - ${lastEpisodeDate.getFullYear()})`}
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
    </>
  );

  return (
    <BaseCard>
      {hasActionArea ? <CardActionArea>{content}</CardActionArea> : content}
    </BaseCard>
  );
}

export default CharacterCard;
