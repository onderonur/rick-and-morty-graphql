import React, { useEffect } from "react";
import { Drawer, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import { GET_SHOW_DRAWER, TOGGLE_DRAWER } from "app-graphql";
import AppDrawerLinkItem from "./AppDrawerLinkItem";
import { useMutation, useQuery } from "@apollo/react-hooks";

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240
  }
}));

function AppDrawer({ location }) {
  const classes = useStyles();
  const [toggleDrawer] = useMutation(TOGGLE_DRAWER, {
    variables: { showDrawer: false }
  });
  const { data } = useQuery(GET_SHOW_DRAWER);
  const { showDrawer } = data;

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

export default withRouter(AppDrawer);
