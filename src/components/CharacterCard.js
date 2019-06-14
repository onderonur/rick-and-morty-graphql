// OK
import React from "react";
import { CardHeader, CardContent } from "@material-ui/core";
import TextWithLabel from "./TextWithLabel";
import BaseImage from "./BaseImage";
import BaseCard from "./BaseCard";

function getEpisodeAirYear(episode) {
  if (episode) {
    return new Date(episode.air_date).getFullYear();
  }
  return "";
}

function CharacterCard({
  character,
  imageAspectRatio,
  hasActionArea,
  showSpecs
}) {
  const { episode } = character;

  const firstEpisode = episode ? episode[0] : null;
  const lastEpisode = episode ? episode[episode.length - 1] : null;

  return (
    <BaseCard hasActionArea={hasActionArea}>
      <BaseImage src={character.image} aspectRatio={imageAspectRatio} />
      <CardHeader
        title={character.name}
        subheader={
          firstEpisode && lastEpisode
            ? `Episodes:${episode.length} (${getEpisodeAirYear(
                firstEpisode
              )} - ${getEpisodeAirYear(lastEpisode)})`
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
