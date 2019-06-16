import React from "react";
import { Grid, CardHeader, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import BaseCard from "components/BaseCard";
import { Link as RouterLink } from "react-router-dom";
import BaseImage from "components/BaseImage";
import charactersPng from "assets/characters.png";
import episodesJpg from "assets/episodes.jpg";
import locationsJpg from "assets/locations.jpg";
import BaseGridList from "components/BaseGridList";

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: "none"
  }
}));

const homeLinks = [
  {
    title: "Characters",
    to: "/characters",
    image: charactersPng
  },
  {
    title: "Episodes",
    to: "/episodes",
    image: episodesJpg
  },
  {
    title: "Locations",
    to: "/locations",
    image: locationsJpg
  }
];

function Home() {
  const classes = useStyles();

  return (
    <>
      <BaseGridList
        items={homeLinks}
        spacing={2}
        renderItem={item => (
          <Grid key={item.to} item xs={12} sm={4}>
            <RouterLink className={classes.link} to={item.to}>
              <BaseCard hasActionArea>
                <BaseImage src={item.image} aspectRatio="1:1" />
                <CardHeader title={item.title} />
              </BaseCard>
            </RouterLink>
          </Grid>
        )}
      />
      <Box my={2}>
        <BaseImage
          src="https://media.giphy.com/media/q9KaEjVuKcpl6/giphy.gif"
          alt="rick gif"
        />
      </Box>
    </>
  );
}

export default Home;
