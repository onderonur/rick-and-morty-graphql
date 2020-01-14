import React from "react";
import { Grid, GridProps } from "@material-ui/core";
import LoadingIndicator from "./LoadingIndicator";
import { Maybe } from "generated/graphql";

interface BaseGridListProps<Item> {
  items: Maybe<Item>[];
  loading?: boolean;
  renderItem: (item: Item, index: number) => void;
  spacing?: GridProps["spacing"];
}

function BaseGridList<Item>({
  items,
  loading,
  renderItem,
  spacing = 1
}: BaseGridListProps<Item>) {
  return (
    <Grid container spacing={spacing}>
      {items &&
        items.map((item, index) => (item ? renderItem(item, index) : null))}
      {loading && (
        <Grid item xs={12}>
          <LoadingIndicator loading />
        </Grid>
      )}
    </Grid>
  );
}

export default BaseGridList;
