import React, { useState } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import LoadingIndicator from "./LoadingIndicator";

function BaseList({
  items = [],
  renderItem,
  loading,
  maxVisibleItemCount,
  ...other
}) {
  const [expand, setExpand] = useState(!maxVisibleItemCount);

  function toggleExpand() {
    setExpand(!expand);
  }

  return !items.length && loading ? (
    <LoadingIndicator />
  ) : (
    <List {...other}>
      {items.map((item, i) =>
        expand || i < maxVisibleItemCount ? renderItem(item, i) : null
      )}
      {maxVisibleItemCount && items.length > maxVisibleItemCount ? (
        <ListItem button onClick={toggleExpand}>
          <ListItemText secondary={`SHOW ${expand ? "LESS" : "MORE"}`} />
        </ListItem>
      ) : null}
      {loading ? (
        <ListItem>
          <LoadingIndicator />
        </ListItem>
      ) : null}
    </List>
  );
}

export default BaseList;
