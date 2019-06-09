import React from "react";
import { Grid, makeStyles, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import LoadingIndicator from "components/LoadingIndicator";
import CharacterCard from "./CharacterCard";

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
        to={`/characters/${character.id}`}
        component={RouterLink}
        className={classes.link}
      >
        <CharacterCard
          character={character}
          hasActionArea
          imageAspectRatio="4:3"
          className={classes.card}
        />
      </Link>
    </Grid>
  );
}

function CharactersGridList({ characters, loading }) {
  return (
    <Grid container spacing={2}>
      {characters.map(character => (
        <CharacterGridListItem key={character.id} character={character} />
      ))}
      <Grid item xs={12}>
        {loading ? <LoadingIndicator /> : null}
      </Grid>
    </Grid>
  );
}

export default CharactersGridList;
