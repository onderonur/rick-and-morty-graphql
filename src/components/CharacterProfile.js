// OK
import React from "react";
import { Typography, Container, Grid, CardContent } from "@material-ui/core";
import CharacterCard from "./CharacterCard";
import BaseCard from "./BaseCard";
import LoadingIndicator from "./LoadingIndicator";
import EpisodeList from "./EpisodeList";

const MAX_VISIBLE_EPISODE_COUNT = 5;

function CharacterProfile({ character, loading }) {
  return loading ? (
    <LoadingIndicator />
  ) : (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <CharacterCard character={character} showSpecs />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Grid item xs={12}>
            <BaseCard>
              <CardContent>
                <Typography variant="h6">Episodes</Typography>
                <EpisodeList
                  episodes={character.episode}
                  maxVisibleEpisodeCount={MAX_VISIBLE_EPISODE_COUNT}
                />
              </CardContent>
            </BaseCard>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CharacterProfile;
