// OK
import React from "react";
import { Typography, Container, Grid, CardContent } from "@material-ui/core";
import BaseCard from "./BaseCard";
import LoadingIndicator from "./LoadingIndicator";
import CharacterGridList from "./CharacterGridList";
import LocationCard from "./LocationCard";

function LocationProfile({ location, loading }) {
  return loading ? (
    <LoadingIndicator />
  ) : (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <LocationCard location={location} />
        </Grid>
        <Grid item xs={12}>
          <Grid item xs={12}>
            <BaseCard>
              <CardContent>
                <Typography variant="h6">Residents</Typography>
                <CharacterGridList characters={location.residents} />
              </CardContent>
            </BaseCard>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LocationProfile;
