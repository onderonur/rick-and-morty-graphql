import React from "react";
import { Grid, CardHeader } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import BaseCard from "components/BaseCard";
import { Link as RouterLink } from "react-router-dom";
import BaseImage from "components/BaseImage";
import charactersPng from "assets/characters.png";
import episodesJpg from "assets/episodes.jpg";
import locationsJpg from "assets/locations.jpg";

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: "none"
  },
  gif: {
    width: "100%"
  }
}));

function Home() {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <RouterLink className={classes.link} to="/characters">
            <BaseCard hasActionArea>
              <BaseImage src={charactersPng} aspectRatio="1:1" />
              <CardHeader title="Characters" />
            </BaseCard>
          </RouterLink>
        </Grid>
        <Grid item xs={12} sm={4}>
          <RouterLink className={classes.link} to="/episodes">
            <BaseCard hasActionArea>
              <BaseImage src={episodesJpg} aspectRatio="1:1" />
              <CardHeader title="Episodes" />
            </BaseCard>
          </RouterLink>
        </Grid>
        <Grid item xs={12} sm={4}>
          <RouterLink className={classes.link} to="/locations">
            <BaseCard hasActionArea>
              <BaseImage src={locationsJpg} aspectRatio="1:1" />
              <CardHeader title="Locations" />
            </BaseCard>
          </RouterLink>
        </Grid>
        <Grid item xs={12}>
          <img
            className={classes.gif}
            src="https://media.giphy.com/media/q9KaEjVuKcpl6/giphy.gif"
            alt="rick gif"
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
