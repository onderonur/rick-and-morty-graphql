import React from 'react';
import { Grid, Box, Typography, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import BaseGridList from '@/common/BaseGridList';
import BaseCard from '@/common/BaseCard';
import BaseImage from '@/common/BaseImage';
import NextLink from '@/routing/NextLink';
import BaseSeo from '@/seo/BaseSeo';
import { routes } from '@/routing/routes';

const useStyles = makeStyles((theme) => ({
  card: {
    '&:hover': {
      '& $mask': {
        opacity: 0.4,
      },
      '& $titleTypography': {
        border: '4px solid currentColor',
      },
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  mask: {
    backgroundColor: theme.palette.common.black,
    opacity: 0.6,
    transition: theme.transitions.create('opacity'),
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.common.white,
  },
  titleTypography: {
    padding: theme.spacing(2),
  },
}));

const homeLinks = [
  {
    title: 'Characters',
    href: routes.characters({}),
    image: '/images/characters.jpg',
  },
  {
    title: 'Episodes',
    href: routes.episodes({}),
    image: '/images/episodes.jpg',
  },
  {
    title: 'Locations',
    href: routes.locations({}),
    image: '/images/locations.jpg',
  },
];

function HomeView() {
  const classes = useStyles();

  return (
    <>
      <BaseSeo title="Home" />
      <BaseGridList
        items={homeLinks}
        spacing={2}
        renderItem={(homeLink) => (
          <Grid key={homeLink.href} item xs={12} sm={4}>
            <NextLink href={homeLink.href}>
              <BaseCard className={classes.card} hasActionArea>
                <BaseImage
                  src={homeLink.image}
                  alt={homeLink.title}
                  width={16}
                  height={9}
                  layout="responsive"
                  objectFit="cover"
                />
                <div className={clsx(classes.overlay, classes.mask)} />
                <div className={clsx(classes.overlay, classes.title)}>
                  <Typography className={classes.titleTypography} variant="h5">
                    {homeLink.title}
                  </Typography>
                </div>
              </BaseCard>
            </NextLink>
          </Grid>
        )}
      />
      <Box my={1}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <BaseImage
              src="/gifs/home01.webp"
              alt="rick gif"
              width={16}
              height={9}
              layout="responsive"
              objectFit="cover"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BaseImage
              src="/gifs/home02.gif"
              alt="snuffles"
              width={16}
              height={9}
              layout="responsive"
              objectFit="cover"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default HomeView;
