import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListProps,
} from '@mui/material';
import LoadingIndicator from './LoadingIndicator';
import { Maybe } from '@/generated/graphql';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const defaultItems: any[] = [];

export type BaseListProps<Item> = ListProps & {
  items: Maybe<Array<Item>>;
  renderItem: (item: Item, index: number) => void;
  loading?: boolean;
  maxVisibleItemCount?: number;
  loadingRef?: React.Ref<HTMLDivElement>;
};

function BaseList<Item>({
  items = defaultItems as Item[],
  renderItem,
  loading,
  maxVisibleItemCount,
  loadingRef,
  ...rest
}: BaseListProps<Item>) {
  const [expand, setExpand] = useState(!maxVisibleItemCount);

  function toggleExpand() {
    setExpand(!expand);
  }

  const itemCount = items?.length;

  return (
    <List {...rest}>
      <>
        {items?.map((item, i) =>
          item && (!maxVisibleItemCount || expand || i < maxVisibleItemCount)
            ? renderItem(item, i)
            : null,
        )}
        {maxVisibleItemCount && itemCount && itemCount > maxVisibleItemCount ? (
          <ListItem disablePadding>
            <ListItemButton onClick={toggleExpand}>
              <ListItemText secondary={`SHOW ${expand ? 'LESS' : 'MORE'}`} />
            </ListItemButton>
          </ListItem>
        ) : null}
        {loading ? (
          <ListItem disablePadding>
            <ListItemButton>
              <LoadingIndicator ref={loadingRef} loading />
            </ListItemButton>
          </ListItem>
        ) : null}
      </>
    </List>
  );
}

export default BaseList;
