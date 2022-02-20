import React from 'react';
import { Grid, Box, Typography, styled } from '@mui/material';
import BaseGridList from '@/common/BaseGridList';
import BaseCard from '@/common/BaseCard';
import BaseImage from '@/common/BaseImage';
import NextLink from '@/routing/NextLink';
import BaseSeo from '@/seo/BaseSeo';
import { routes } from '@/routing/routes';

const Overlay = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

const Mask = styled(Overlay)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  opacity: 0.6,
  transition: theme.transitions.create('opacity'),
}));

const Title = styled(Overlay)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.palette.common.white,
}));

const TitleText = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const StyledCard = styled(BaseCard)({
  '&:hover': {
    [`${Mask}`]: {
      opacity: 0.4,
    },
    [`${TitleText}`]: {
      border: '4px solid currentColor',
    },
  },
});

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
  return (
    <>
      <BaseSeo title="Home" />
      <BaseGridList
        items={homeLinks}
        spacing={2}
        renderItem={(homeLink) => (
          <Grid key={homeLink.href} item xs={12} sm={4}>
            <NextLink href={homeLink.href}>
              <StyledCard hasActionArea>
                <BaseImage
                  src={homeLink.image}
                  alt={homeLink.title}
                  width={16}
                  height={9}
                  layout="responsive"
                  objectFit="cover"
                />
                <Mask />
                <Title>
                  <TitleText variant="h5">{homeLink.title}</TitleText>
                </Title>
              </StyledCard>
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
              alt="snuffles gif"
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
