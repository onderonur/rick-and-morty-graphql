import React from "react";
import { Grid, Link } from "@material-ui/core";
import RouterLink from "shared/components/RouterLink";
import CharacterCard from "shared/components/CharacterCard";
import gql from "graphql-tag";
import { CharacterGridListItem_CharacterFragment } from "generated/graphql";

interface CharacterGridListItemProps {
  character: CharacterGridListItem_CharacterFragment;
}

function CharacterGridListItem({ character }: CharacterGridListItemProps) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Link to={`/characters/${character.id}`} component={RouterLink}>
        <CharacterCard
          character={character}
          hasActionArea
          imageAspectRatio="4:3"
        />
      </Link>
    </Grid>
  );
}

CharacterGridListItem.fragments = {
  character: gql`
    fragment CharacterGridListItem_character on Character {
      ...CharacterCard_character
    }
    ${CharacterCard.fragments.character}
  `
};

export default CharacterGridListItem;
