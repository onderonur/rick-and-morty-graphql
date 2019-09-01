import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";
import BaseList from "./BaseList";
import RouterLink from "./RouterLink";

function LocationList({ locations, loading, maxVisibleItemCount }) {
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
