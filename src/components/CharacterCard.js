import React from "react";
import { CardHeader, CardContent, Link } from "@material-ui/core";
import TextWithLabel from "./TextWithLabel";
import BaseImage from "./BaseImage";
import BaseCard from "./BaseCard";
import RouterLink from "./RouterLink";

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
      <BaseImage
        src={character.image}
        alt={character.name}
        aspectRatio={imageAspectRatio}
      />
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
        </CardContent>
      ) : null}
    </BaseCard>
  );
}

export default CharacterCard;
