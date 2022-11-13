import React from 'react';
import { Typography, Box, styled } from '@mui/material';
import BaseCard from '@/common/BaseCard';
import BaseImage, { imageProps } from '@/common/BaseImage';
import BaseSeo from '@/seo/BaseSeo';
import { routes } from '@/routing/routes';
import charactersPic from '@/images/characters.jpg';
import episodesPic from '@/images/episodes.jpg';
import locationsPic from '@/images/locations.jpg';
import home01Gif from '@/gifs/home01.webp';
import home02Gif from '@/gifs/home02.gif';

const Overlay = styled('div')({
  position: 'absolute',
  inset: 0,
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

const StyledCard = styled(BaseCard)(({ theme }) => ({
  borderRadius: Number(theme.shape.borderRadius) * 2,
  '&:hover': {
    [`${Mask}`]: {
      opacity: 0.4,
    },
    [`${TitleText}`]: {
      border: '4px solid currentColor',
    },
  },
}));

const homeCards = [
  {
    title: 'Characters',
    href: routes.characters({}),
    image: charactersPic,
  },
  {
    title: 'Episodes',
    href: routes.episodes({}),
    image: episodesPic,
  },
  {
    title: 'Locations',
    href: routes.locations({}),
    image: locationsPic,
  },
  {
    title: 'rick gif',
    gif: home01Gif,
  },
  {
    title: 'snuffles gif',
    gif: home02Gif,
  },
];

function HomePage() {
  return (
    <>
      <BaseSeo title="Home" />
      <Box
        sx={{
          display: 'grid',
          gap: 1,
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(6, 1fr)' },
        }}
      >
        {homeCards.map((homeCard) => {
          return (
            <Box
              key={homeCard.title}
              sx={{ gridColumn: homeCard.href ? 'span 2' : 'span 3' }}
            >
              <StyledCard href={homeCard.href}>
                <BaseImage
                  src={homeCard.image ?? homeCard.gif}
                  alt={homeCard.title}
                  {...imageProps.responsive('16 / 9')}
                />
                {homeCard.href && (
                  <>
                    <Mask />
                    <Title>
                      <TitleText variant="h5">{homeCard.title}</TitleText>
                    </Title>
                  </>
                )}
              </StyledCard>
            </Box>
          );
        })}
      </Box>
    </>
  );
}

export default HomePage;
