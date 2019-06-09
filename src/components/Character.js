import React, { useState } from "react";
import {
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  Grid,
  Card,
  CardContent
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import CharacterQuery from "./CharacterQuery";
import CharacterCard from "./CharacterCard";

const MAX_VISIBLE_EPISODE_COUNT = 5;

function Character({
  match: {
    params: { characterId }
  }
}) {
  const [expandEpisodeList, setExpandEpisodeList] = useState(false);

  return (
    <CharacterQuery characterId={characterId}>
      {({ character, loading }) => {
        const { episode } = character;
        const firstEpisodeDate = new Date(episode[0].air_date);
        const lastEpisodeDate = new Date(episode[episode.length - 1].air_date);

        return (
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <CharacterCard character={character} />
              </Grid>
              <Grid item xs={12} sm={8}>
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6">
                        Episodes:
                        {`${
                          episode.length
                        } (${firstEpisodeDate.getFullYear()} - ${lastEpisodeDate.getFullYear()})`}
                      </Typography>
                      <List dense>
                        {episode.map((item, index) =>
                          expandEpisodeList ||
                          index <= MAX_VISIBLE_EPISODE_COUNT ? (
                            <ListItem
                              key={item.id}
                              button
                              divider
                              to="/"
                              component={RouterLink}
                            >
                              <ListItemText
                                primary={item.name}
                                secondary={`${item.episode} - ${item.air_date}`}
                              />
                            </ListItem>
                          ) : null
                        )}
                        {episode.length > MAX_VISIBLE_EPISODE_COUNT ? (
                          <ListItem
                            button
                            onClick={() =>
                              setExpandEpisodeList(!expandEpisodeList)
                            }
                          >
                            <ListItemText
                              secondary={
                                expandEpisodeList ? "SHOW LESS" : "SHOW MORE"
                              }
                            />
                          </ListItem>
                        ) : null}
                      </List>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        );
      }}
    </CharacterQuery>
  );
}

export default Character;
