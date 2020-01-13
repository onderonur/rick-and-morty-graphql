import React from "react";
import { Grid } from "@material-ui/core";
import LoadingIndicator from "./LoadingIndicator";

function BaseGridList({ items, loading, renderItem, spacing = 1 }) {
  return (
    <Grid container spacing={spacing}>
      {items && items.map((item, index) => renderItem(item, index))}
      {loading && (
        <Grid item xs={12}>
          <LoadingIndicator loading />
        </Grid>
      )}
    </Grid>
  );
}

export default BaseGridList;
