// OK
import React from "react";
import { Grid, makeStyles, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import BaseGridList from "./BaseGridList";

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

function CharacterGridList({ characters, loading }) {
  return (
    <BaseGridList
      items={characters}
      loading={loading}
      renderItem={character => (
        <CharacterGridListItem key={character.id} character={character} />
      )}
    />
  );
}

export default CharacterGridList;
