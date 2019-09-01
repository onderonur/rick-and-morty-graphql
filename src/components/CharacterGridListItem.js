import React from "react";
import { Grid, Link } from "@material-ui/core";
import CharacterCard from "./CharacterCard";
import RouterLink from "./RouterLink";

function CharacterGridListItem({ character }) {
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

export default CharacterGridListItem;
