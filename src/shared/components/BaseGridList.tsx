import React from "react";
import { Grid, GridProps } from "@material-ui/core";
import LoadingIndicator from "./LoadingIndicator";
import Maybe from "graphql/tsutils/Maybe";

interface BaseGridListProps<Item> {
  items: Maybe<Array<Maybe<Item>>>;
  loading?: boolean;
  renderItem: (item: Item, index: number) => void;
  spacing?: GridProps["spacing"];
}

const DEFAULT_ITEMS: any[] = [];

function BaseGridList<Item>({
  items = DEFAULT_ITEMS as Item[],
  loading,
  renderItem,
  spacing = 1
}: BaseGridListProps<Item>) {
  return (
    <Grid container spacing={spacing}>
      {items?.map((item, index) => item && renderItem(item, index))}
      {loading && (
        <Grid item xs={12}>
          <LoadingIndicator loading />
        </Grid>
      )}
    </Grid>
  );
}

export default BaseGridList;
