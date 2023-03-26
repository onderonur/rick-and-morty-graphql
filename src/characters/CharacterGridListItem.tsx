import { Grid } from '@mui/material';
import { CharacterGridListItem_CharacterFragment } from '@/gql/graphql';
import CharacterCard from './CharacterCard';
import { routes } from '@/routing/routes';
import { gql } from '@apollo/client';

interface CharacterGridListItemProps {
  character: CharacterGridListItem_CharacterFragment;
}

function CharacterGridListItem({ character }: CharacterGridListItemProps) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <CharacterCard
        character={character}
        href={
          character.id
            ? routes.character({ params: { id: character.id } })
            : routes.home({})
        }
      />
    </Grid>
  );
}

CharacterGridListItem.fragments = {
  character: gql`
    fragment CharacterGridListItem_character on Character {
      ...CharacterCard_character
    }
    ${CharacterCard.fragments.character}
  `,
};

export default CharacterGridListItem;
