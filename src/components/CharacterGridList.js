import React from "react";
import BaseGridList from "./BaseGridList";
import CharacterGridListItem from "./CharacterGridListItem";

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

export default CharacterGridList;
