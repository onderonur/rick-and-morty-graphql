import React from 'react';
import { Typography, Box, styled } from '@mui/material';
import BaseCard from '@/common/BaseCard';
import BaseImage from '@/common/BaseImage';
import BaseSeo from '@/seo/BaseSeo';
import { routes } from '@/routing/routes';

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
  {
    title: 'rick gif',
    image: '/gifs/home01.webp',
  },
  {
    title: 'snuffles gif',
    image: '/gifs/home02.gif',
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
                  src={homeCard.image}
                  alt={homeCard.title}
                  width={16}
                  height={9}
                  layout="responsive"
                  objectFit="cover"
                  priority
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
