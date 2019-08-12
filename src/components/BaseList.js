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

  const isInitialFetch = loading & !items.length;

  return (
    <LoadingIndicator loading={isInitialFetch}>
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
            <LoadingIndicator loading />
          </ListItem>
        ) : null}
      </List>
    </LoadingIndicator>
  );
}

export default BaseList;
