// OK
import React from "react";
import { Grid } from "@material-ui/core";
import LoadingIndicator from "components/LoadingIndicator";

function BaseGridList({ items = [], loading, renderItem, spacing = 1 }) {
  const loadingIndicator = (
    <Grid item xs={12}>
      <LoadingIndicator />
    </Grid>
  );

  return !items && loading ? (
    loadingIndicator
  ) : items ? (
    <Grid container spacing={spacing}>
      {items.map((item, index) => renderItem(item, index))}
      {loading && loadingIndicator}
    </Grid>
  ) : null;
}

export default BaseGridList;
