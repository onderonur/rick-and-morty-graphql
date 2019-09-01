import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";
import BaseList from "./BaseList";
import RouterLink from "./RouterLink";

function EpisodeList({ episodes, loading, maxVisibleItemCount }) {
  return (
    <BaseList
      items={episodes}
      loading={loading}
      maxVisibleItemCount={maxVisibleItemCount}
      renderItem={item => (
        <ListItem
          key={item.id}
          button
          divider
          to={`/episodes/${item.id}`}
          component={RouterLink}
        >
          <ListItemText
            primary={item.name}
            secondary={`${item.episode} - ${item.air_date}`}
          />
        </ListItem>
      )}
    >
      );
    </BaseList>
  );
}

export default EpisodeList;
