import React, { useEffect } from 'react';
import { Drawer, List } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { withRouter } from 'react-router-dom';
import { Query, Mutation, withApollo } from 'react-apollo';
import { GET_SHOW_DRAWER, TOGGLE_DRAWER } from 'app-graphql';
import AppDrawerLinkItem from './AppDrawerLinkItem';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240
  }
}));

function AppDrawer({ location, client }) {
  const classes = useStyles();

  useEffect(() => {
    function handleCloseDrawer() {
      client.mutate({
        mutation: TOGGLE_DRAWER,
        variables: { showDrawer: false }
      });
    }

    handleCloseDrawer();
  }, [location, client]);

  return (
    <Mutation mutation={TOGGLE_DRAWER} variables={{ showDrawer: false }}>
      {toggleDrawer => {
        return (
          <Query query={GET_SHOW_DRAWER}>
            {({ data }) => {
              const { showDrawer } = data;
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
            }}
          </Query>
        );
      }}
    </Mutation>
  );
}

export default withRouter(withApollo(AppDrawer));
