// OK
import React from "react";
import { Grid } from "@material-ui/core";
import LoadingIndicator from "components/LoadingIndicator";

function BaseGridList({ items = [], loading, renderItem }) {
  const loadingIndicator = (
    <Grid item xs={12}>
      <LoadingIndicator />
    </Grid>
  );

  return !items && loading ? (
    loadingIndicator
  ) : items ? (
    <Grid container spacing={1}>
      {items.map((item, index) => renderItem(item, index))}
      {loading && loadingIndicator}
    </Grid>
  ) : null;
}

export default BaseGridList;
