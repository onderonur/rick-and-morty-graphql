import React, { useState } from "react";
import { List, ListItem, ListItemText, ListProps } from "@material-ui/core";
import LoadingIndicator from "./LoadingIndicator";
import Maybe from "graphql/tsutils/Maybe";

const DEFAULT_ITEMS: any[] = [];

type BaseListProps<Item> = ListProps & {
  items: Maybe<Array<Maybe<Item>>>;
  renderItem: (item: Item, index: number) => void;
  loading?: boolean;
  maxVisibleItemCount?: number;
};

function BaseList<Item>({
  items = DEFAULT_ITEMS as Item[],
  renderItem,
  loading,
  maxVisibleItemCount,
  ...rest
}: BaseListProps<Item>) {
  const [expand, setExpand] = useState(!maxVisibleItemCount);

  function toggleExpand() {
    setExpand(!expand);
  }

  const itemCount = items?.length;
  const isInitialFetch = Boolean(loading && !itemCount);

  return (
    <LoadingIndicator loading={isInitialFetch}>
      <List {...rest}>
        {items?.map((item, i) =>
          item && (!maxVisibleItemCount || expand || i < maxVisibleItemCount)
            ? renderItem(item, i)
            : null
        )}
        {maxVisibleItemCount && itemCount && itemCount > maxVisibleItemCount ? (
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
