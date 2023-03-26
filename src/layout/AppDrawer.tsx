import React, { useEffect, useCallback } from 'react';
import { Drawer, List, styled } from '@mui/material';
import AppDrawerLinkItem from './AppDrawerLinkItem';
import { useRouter } from 'next/router';
import { gql } from '@apollo/client';
import { useGetShowDrawerQuery } from '@/gql/graphql';
import { showDrawerVar } from '@/apollo/cache';
import { routes } from '@/routing/routes';

const StyledDrawer = styled(Drawer)({
  '.MuiDrawer-paper': {
    width: 240,
  },
});

/* eslint-disable graphql/template-strings */
const GET_SHOW_DRAWER = gql`
  query GetShowDrawer {
    showDrawer @client
  }
`;
/* eslint-disable graphql/template-strings */

function AppDrawer() {
  const router = useRouter();

  const { data } = useGetShowDrawerQuery({ query: GET_SHOW_DRAWER });

  const closeDrawer = useCallback(() => {
    showDrawerVar(false);
  }, []);

  // We close the drawer when a route change gets completed.
  useEffect(() => {
    const eventType = 'routeChangeComplete';

    router.events.on(eventType, closeDrawer);

    return () => {
      router.events.off(eventType, closeDrawer);
    };
  }, [closeDrawer, router.events]);

  return (
    <StyledDrawer open={data?.showDrawer} anchor="right" onClose={closeDrawer}>
      <List>
        <AppDrawerLinkItem
          href={routes.characters({})}
          emoji="👽"
          ariaLabel="character-emoji"
          title="Characters"
        />
        <AppDrawerLinkItem
          href={routes.episodes({})}
          emoji="🎬"
          ariaLabel="episode-emoji"
          title="Episodes"
        />
        <AppDrawerLinkItem
          href={routes.locations({})}
          emoji="🌍"
          ariaLabel="location-emoji"
          title="Locations"
        />
      </List>
    </StyledDrawer>
  );
}

export default AppDrawer;
