import React from "react";
import { Grid, makeStyles, Link } from "@material-ui/core";
import CharacterCard from "./CharacterCard";
import RouterLink from "./RouterLink";

const useStyles = makeStyles({
  link: {
    "&:hover": {
      textDecoration: "none"
    }
  }
});

function CharacterGridListItem({ character }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Link
        className={classes.link}
        to={`/characters/${character.id}`}
        component={RouterLink}
      >
        <CharacterCard
          className={classes.card}
          character={character}
          hasActionArea
          imageAspectRatio="4:3"
        />
      </Link>
    </Grid>
  );
}

export default CharacterGridListItem;
