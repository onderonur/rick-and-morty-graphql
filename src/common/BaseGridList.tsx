import React from 'react';
import { Grid, GridProps } from '@mui/material';
import LoadingIndicator from './LoadingIndicator';
import { Maybe } from '@/generated/graphql';

export interface BaseGridListProps<Item> {
  items: Maybe<Array<Item>>;
  loading?: boolean;
  renderItem: (item: Item, index: number) => void;
  spacing?: GridProps['spacing'];
  loadingRef?: React.Ref<HTMLDivElement>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const defaultItems: any[] = [];

function BaseGridList<Item>({
  items = defaultItems as Item[],
  loading,
  renderItem,
  spacing = 1,
  loadingRef,
}: BaseGridListProps<Item>) {
  return (
    <Grid container spacing={spacing}>
      {items?.map((item, index) => renderItem(item, index))}
      {loading && (
        <Grid item xs={12} ref={loadingRef}>
          <LoadingIndicator loading />
        </Grid>
      )}
    </Grid>
  );
}

export default BaseGridList;
