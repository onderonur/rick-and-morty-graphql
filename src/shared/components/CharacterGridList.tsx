import React from "react";
import CharacterGridListItem from "./CharacterGridListItem";
import gql from "graphql-tag";
import BaseGridList from "./BaseGridList";
import {
  CharacterGridList_CharacterFragment,
  Maybe,
} from "../../generated/graphql";

type ListItem = Maybe<CharacterGridList_CharacterFragment>;

function renderItem(character: ListItem) {
  if (character?.id) {
    return <CharacterGridListItem key={character.id} character={character} />;
  }

  return null;
}

interface CharacterGridListProps {
  characters: Maybe<Array<ListItem>>;
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
  `,
};

export default CharacterGridList;
