import React from "react";
import { CardHeader, CardContent } from "@material-ui/core";
import TextWithLabel from "./TextWithLabel";
import BaseCard from "./BaseCard";

function CharacterCard({ episode }) {
  return (
    <BaseCard>
      <CardHeader title={episode.name} subheader={episode.episode} />
      <CardContent>
        <TextWithLabel label="Air Date" text={episode.air_date} />
      </CardContent>
    </BaseCard>
  );
}

export default CharacterCard;
