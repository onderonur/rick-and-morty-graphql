import React from "react";
import CharacterGridListItem from "./CharacterGridListItem";
import BaseGridList from "shared/components/BaseGridList";
import gql from "graphql-tag";
import { CharacterGridList_CharacterFragment, Maybe } from "generated/graphql";

function renderItem(character: CharacterGridList_CharacterFragment) {
  if (character.id) {
    return <CharacterGridListItem key={character.id} character={character} />;
  }

  return null;
}

interface CharacterGridListProps {
  characters: Maybe<CharacterGridList_CharacterFragment>[];
  loading?: boolean;
}

function CharacterGridList({ characters, loading }: CharacterGridListProps) {
  return (
    <BaseGridList
      items={characters}
      loading={loading}
      renderItem={renderItem}
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
