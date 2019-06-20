import React, { useEffect } from "react";
import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import RouterLink from "./RouterLink";
import { withRouter } from "react-router-dom";
import { Query, Mutation, withApollo } from "react-apollo";
import { GET_SHOW_DRAWER, TOGGLE_DRAWER } from "app-graphql";

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240
  }
}));

function AppDrawer({ location, client }) {
  const classes = useStyles();

  useEffect(() => {
    client.mutate({
      mutation: TOGGLE_DRAWER,
      variables: { showDrawer: false }
    });
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
                    <ListItem button to="/characters" component={RouterLink}>
                      <ListItemText>
                        <span role="img" aria-label="character-emoji">
                          👽
                        </span>{" "}
                        Characters
                      </ListItemText>
                    </ListItem>
                    <ListItem button to="/episodes" component={RouterLink}>
                      <ListItemText>
                        <span role="img" aria-label="episode-emoji">
                          🎬
                        </span>{" "}
                        Episodes
                      </ListItemText>
                    </ListItem>
                    <ListItem button to="/locations" component={RouterLink}>
                      <ListItemText>
                        <span role="img" aria-label="location-emoji">
                          🌍
                        </span>{" "}
                        Locations
                      </ListItemText>
                    </ListItem>
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
