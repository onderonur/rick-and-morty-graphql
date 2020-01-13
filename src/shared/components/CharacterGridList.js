import React from "react";
import CharacterGridListItem from "./CharacterGridListItem";
import BaseGridList from "shared/components/BaseGridList";
import gql from "graphql-tag";

function CharacterGridList({ characters, loading }) {
  return (
    <BaseGridList
      items={characters}
      loading={loading}
      renderItem={character => (
        <CharacterGridListItem key={character.id} character={character} />
      )}
    />
  );
}

CharacterGridList.fragments = {
  character: gql`
    fragment CharacterGridList_character on Character {
      ...CharacterGridListItem_character
    }
    ${CharacterGridListItem.fragments.character}
  `
};

export default CharacterGridList;
