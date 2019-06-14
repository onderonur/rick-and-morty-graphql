// OK
import React from "react";
import { Typography, Container, Grid, CardContent } from "@material-ui/core";
import EpisodeCard from "./EpisodeCard";
import BaseCard from "./BaseCard";
import LoadingIndicator from "./LoadingIndicator";
import CharacterGridList from "./CharacterGridList";

function EpisodeProfile({ episode, loading }) {
  return loading ? (
    <LoadingIndicator />
  ) : (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <EpisodeCard episode={episode} />
        </Grid>
        <Grid item xs={12}>
          <Grid item xs={12}>
            <BaseCard>
              <CardContent>
                <Typography variant="h6">Characters</Typography>
                <CharacterGridList characters={episode.characters} />
              </CardContent>
            </BaseCard>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default EpisodeProfile;
