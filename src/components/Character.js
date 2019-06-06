import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  makeStyles
} from "@material-ui/core";

const GET_CHARACTER = gql`
  query getCharacter($id: ID) {
    character(id: $id) {
      id
      name
      image
      status
      species
      gender
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

function Character({
  match: {
    params: { characterId }
  }
}) {
  const classes = useStyles();

  return (
    <Query query={GET_CHARACTER} variables={{ id: characterId }}>
      {({ data, loading, error }) => {
        if (error) {
          return error;
        }

        if (loading) {
          return "Loading...";
        }

        const { character } = data;
        return (
          <Card>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={character.image}
                title={character.name}
              />
              <CardContent>
                <Typography variant="h6">{character.name}</Typography>
                <Typography>Status: {character.status}</Typography>
                <Typography>Species: {character.species}</Typography>
                <Typography>Gender: {character.gender}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      }}
    </Query>
  );
}

export default Character;
