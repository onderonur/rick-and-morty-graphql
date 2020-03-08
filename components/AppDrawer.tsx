import React, { useEffect } from "react";
import { Drawer, List, makeStyles } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import AppDrawerLinkItem from "./AppDrawerLinkItem";
import { useMutation } from "@apollo/react-hooks";
import { TOGGLE_DRAWER } from "shared/mutations";
import gql from "graphql-tag";
import { useGetShowDrawerQuery } from "generated/graphql";

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
  const location = useLocation();
  const [toggleDrawer] = useMutation(TOGGLE_DRAWER, {
    variables: { showDrawer: false },
  });
  const { data } = useGetShowDrawerQuery({ query: GET_SHOW_DRAWER });
  const showDrawer = data?.showDrawer;

  useEffect(() => {
    function handleCloseDrawer() {
      toggleDrawer();
    }

    handleCloseDrawer();
  }, [location, toggleDrawer]);

  return (
    <Drawer
      classes={{ paper: classes.drawer }}
      open={showDrawer}
      anchor="right"
      onClose={toggleDrawer}
    >
      <List>
        <AppDrawerLinkItem
          to="/characters"
          emoji="👽"
          ariaLabel="character-emoji"
          title="Characters"
        />
        <AppDrawerLinkItem
          to="/episodes"
          emoji="🎬"
          ariaLabel="episode-emoji"
          title="Episodes"
        />
        <AppDrawerLinkItem
          to="/locations"
          emoji="🌍"
          ariaLabel="location-emoji"
          title="Locations"
        />
      </List>
    </Drawer>
  );
}

export default AppDrawer;
