import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";

function EpisodeList({ episodes = [], maxVisibleEpisodeCount }) {
  const [expand, setExpand] = useState(!maxVisibleEpisodeCount);

  function toggleExpand() {
    setExpand(!expand);
  }

  return (
    <List dense>
      {episodes.map((item, index) =>
        expand || index <= maxVisibleEpisodeCount ? (
          <ListItem key={item.id} button divider to="/" component={RouterLink}>
            <ListItemText
              primary={item.name}
              secondary={`${item.episode} - ${item.air_date}`}
            />
          </ListItem>
        ) : null
      )}
      {episodes.length > maxVisibleEpisodeCount ? (
        <ListItem button onClick={toggleExpand}>
          <ListItemText secondary={expand ? "SHOW LESS" : "SHOW MORE"} />
        </ListItem>
      ) : null}
    </List>
  );
}

export default EpisodeList;
