import React, { useEffect, useCallback } from "react";
import { Drawer, List, makeStyles } from "@material-ui/core";
import AppDrawerLinkItem from "./AppDrawerLinkItem";
import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import { useGetShowDrawerQuery } from "@/generated/graphql";
import { showDrawerVar } from "@/modules/apollo/cache";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
  },
}));

/* eslint-disable graphql/template-strings */
const GET_SHOW_DRAWER = gql`
  query GetShowDrawer {
    showDrawer @client
  }
`;
/* eslint-disable graphql/template-strings */

function AppDrawer() {
  const classes = useStyles();

  const router = useRouter();

  const { data } = useGetShowDrawerQuery({ query: GET_SHOW_DRAWER });

  const closeDrawer = useCallback(() => {
    showDrawerVar(false);
  }, []);

  // We close the drawer when a route change gets completed.
  useEffect(() => {
    const eventType = "routeChangeComplete";

    router.events.on(eventType, closeDrawer);

    return () => {
      router.events.off(eventType, closeDrawer);
    };
  }, [closeDrawer, router.events]);

  return (
    <Drawer
      classes={{ paper: classes.drawer }}
      open={data?.showDrawer}
      anchor="right"
      onClose={closeDrawer}
    >
      <List>
        <AppDrawerLinkItem
          href="/characters"
          emoji="👽"
          ariaLabel="character-emoji"
          title="Characters"
        />
        <AppDrawerLinkItem
          href="/episodes"
          emoji="🎬"
          ariaLabel="episode-emoji"
          title="Episodes"
        />
        <AppDrawerLinkItem
          href="/locations"
          emoji="🌍"
          ariaLabel="location-emoji"
          title="Locations"
        />
      </List>
    </Drawer>
  );
}

export default AppDrawer;
