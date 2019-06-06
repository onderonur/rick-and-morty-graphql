import React, { useMemo } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import {
  Grid,
  Card,
  CardActionArea,
  makeStyles,
  CardMedia,
  CardContent,
  Typography,
  Link,
  CircularProgress,
  Box
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import InfiniteScrollWrapper from "./InfiniteScrollWrapper";
import CharacterSearch from "./CharacterSearch";
import queryString from "query-string";

const GET_CHARACTERS = gql`
  query getCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      results {
        id
        name
        image
        status
        species
        gender
      }
      info {
        next
      }
    }
  }
`;

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 320
  }
});

function CharacterList({ location: { search } }) {
  const searcyQuery = useMemo(() => queryString.parse(search), [search]);
  const classes = useStyles();

  let filter = {
    name: searcyQuery.name
  };

  return (
    <Query
      query={GET_CHARACTERS}
      variables={{ filter }}
      notifyOnNetworkStatusChange
    >
      {({ data, loading, error, fetchMore }) => {
        if (error) {
          return error;
        }

        if (loading && !data.characters) {
          return "Loading...";
        }

        const { characters } = data;

        const results = characters.results || [];
        const info = characters.info || null;

        return (
          <>
            <InfiniteScrollWrapper
              hasNextPage={info ? info.next : null}
              loading={loading}
              loadMore={() =>
                fetchMore({
                  query: GET_CHARACTERS,
                  variables: { filter, page: info.next },
                  updateQuery: (prevResult, { fetchMoreResult }) => {
                    const newData = {
                      characters: {
                        ...prevResult.characters,
                        results: [
                          ...prevResult.characters.results,
                          ...fetchMoreResult.characters.results
                        ],
                        info: {
                          ...fetchMoreResult.characters.info
                        }
                      }
                    };

                    return newData;
                  }
                })
              }
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <CharacterSearch />
                </Grid>
                {results.map(character => (
                  <Grid key={character.id} item xs={12} sm={6} md={4} lg={3}>
                    <Link
                      to={`/characters/${character.id}`}
                      component={RouterLink}
                    >
                      <Card>
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image={character.image}
                            title={character.name}
                          />
                          <CardContent>
                            <Typography variant="h6">
                              {character.name}
                            </Typography>
                            <Typography>Status: {character.status}</Typography>
                            <Typography>
                              Species: {character.species}
                            </Typography>
                            <Typography>Gender: {character.gender}</Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Link>
                  </Grid>
                ))}
                <Grid item xs={12}>
                  {loading ? (
                    <Box display="flex" justifyContent="center">
                      <CircularProgress size={64} />
                    </Box>
                  ) : null}
                </Grid>
              </Grid>
            </InfiniteScrollWrapper>
          </>
        );
      }}
    </Query>
  );
}

export default CharacterList;
