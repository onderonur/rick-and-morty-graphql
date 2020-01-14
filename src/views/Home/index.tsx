import React from "react";
import { Grid, Box, Typography, makeStyles } from "@material-ui/core";
import charactersPng from "assets/images/characters.png";
import episodesJpg from "assets/images/episodes.jpg";
import locationsJpg from "assets/images/locations.jpg";
import home01 from "assets/gifs/home01.webp";
import home02 from "assets/gifs/home02.gif";
import clsx from "clsx";
import BaseGridList from "shared/components/BaseGridList";
import RouterLink from "shared/components/RouterLink";
import BaseCard from "shared/components/BaseCard";
import BaseImage from "shared/components/BaseImage";

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: "none"
  },
  card: {
    "&:hover": {
      "& $mask": {
        opacity: 0.2
      },
      "& $titleTypography": {
        border: "4px solid currentColor"
      }
    }
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  },
  mask: {
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity")
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.common.white
  },
  titleTypography: {
    padding: theme.spacing(2)
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
        renderItem={homeLink => (
          <Grid key={homeLink.to} item xs={12} sm={4}>
            <RouterLink className={classes.link} to={homeLink.to}>
              <BaseCard className={classes.card} hasActionArea>
                <BaseImage
                  src={homeLink.image}
                  alt={homeLink.title}
                  aspectRatio="16:9"
                />
                <div className={clsx(classes.overlay, classes.mask)} />
                <div className={clsx(classes.overlay, classes.title)}>
                  <Typography className={classes.titleTypography} variant="h5">
                    {homeLink.title}
                  </Typography>
                </div>
              </BaseCard>
            </RouterLink>
          </Grid>
        )}
      />
      <Box my={1}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <BaseImage src={home01} alt="rick gif" aspectRatio="16:9" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BaseImage src={home02} alt="snuffles" aspectRatio="16:9" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home;
