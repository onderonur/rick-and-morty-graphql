import React, { useEffect } from "react";
import { Drawer, List, makeStyles } from "@material-ui/core";
import AppDrawerLinkItem from "./AppDrawerLinkItem";
import { useMutation } from "@apollo/react-hooks";
import { TOGGLE_DRAWER } from "@/shared/mutations";
import gql from "graphql-tag";
import { useGetShowDrawerQuery } from "@/generated/graphql";
import { useRouter } from "next/router";

/* eslint-disable graphql/template-strings */
const GET_SHOW_DRAWER = gql`
  query GetShowDrawer {
    showDrawer @client
  }
`;
/* eslint-disable graphql/template-strings */

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
  },
}));

function AppDrawer() {
  const classes = useStyles();
  const [toggleDrawer] = useMutation(TOGGLE_DRAWER, {
    variables: { showDrawer: false },
  });
  const { data } = useGetShowDrawerQuery({ query: GET_SHOW_DRAWER });
  const showDrawer = data?.showDrawer;
  const router = useRouter();

  // We close the drawer when a route change gets completed.
  useEffect(() => {
    function handleCloseDrawer() {
      toggleDrawer();
    }

    const eventType = "routeChangeComplete";

    router.events.on(eventType, handleCloseDrawer);

    return () => {
      router.events.off(eventType, handleCloseDrawer);
    };
  }, [toggleDrawer]);

  return (
    <Drawer
      classes={{ paper: classes.drawer }}
      open={showDrawer}
      anchor="right"
      onClose={toggleDrawer}
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
