// OK
import React from "react";
import { Grid } from "@material-ui/core";
import LoadingIndicator from "components/LoadingIndicator";

function BaseGridList({ items = [], loading, renderItem, spacing = 1 }) {
  const isInitialFetch = loading && !items;

  return (
    <LoadingIndicator loading={isInitialFetch}>
      <Grid container spacing={spacing}>
        {items.map((item, index) => renderItem(item, index))}
        {loading && (
          <Grid item xs={12}>
            <LoadingIndicator loading />
          </Grid>
        )}
      </Grid>
    </LoadingIndicator>
  );
}

export default BaseGridList;
