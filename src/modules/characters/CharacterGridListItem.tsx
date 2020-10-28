import React from "react";
import { Grid } from "@material-ui/core";
import gql from "graphql-tag";
import { CharacterGridListItem_CharacterFragment } from "@/generated/graphql";
import CharacterCard from "./CharacterCard";
import NextLink from "@/modules/shared/NextLink";

interface CharacterGridListItemProps {
  character: CharacterGridListItem_CharacterFragment;
}

function CharacterGridListItem({ character }: CharacterGridListItemProps) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <NextLink href={`/characters/${character.id}`}>
        <CharacterCard
          character={character}
          hasActionArea
          imageAspectRatio="4:3"
        />
      </NextLink>
    </Grid>
  );
}

CharacterGridListItem.fragments = {
  character: gql`
    fragment CharacterGridListItem_character on Character {
      ...CharacterCard_character
    }
    ${CharacterCard.fragments.character}
  `,
};

export default CharacterGridListItem;
