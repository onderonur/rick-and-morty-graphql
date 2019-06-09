import React from "react";
import { Typography, Card, CardContent } from "@material-ui/core";
import TextWithLabel from "./TextWithLabel";
import BaseImage from "./BaseImage";

function CharacterCard({ character, className }) {
  return (
    <Card className={className}>
      <BaseImage src={character.image} aspectRatio="1:1" />
      <CardContent>
        <Typography variant="h5">{character.name}</Typography>
        <TextWithLabel label="Staus" text={character.status} />
        <TextWithLabel label="Species" text={character.species} />
        <TextWithLabel label="Gender" text={character.gender} />
        <TextWithLabel label="Origin" text={character.origin.name} />
        <TextWithLabel label="Location" text={character.location.name} />
      </CardContent>
    </Card>
  );
}

export default CharacterCard;
