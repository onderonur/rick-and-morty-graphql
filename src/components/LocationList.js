import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import BaseList from "./BaseList";

function LocationList({ locations = [], loading, maxVisibleItemCount }) {
  return (
    <BaseList
      items={locations}
      loading={loading}
      maxVisibleItemCount={maxVisibleItemCount}
      renderItem={item => (
        <ListItem
          key={item.id}
          button
          divider
          to={`/locations/${item.id}`}
          component={RouterLink}
        >
          <ListItemText primary={item.name} secondary={item.type} />
        </ListItem>
      )}
    >
      );
    </BaseList>
  );
}

export default LocationList;
