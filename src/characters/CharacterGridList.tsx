import React from 'react';
import CharacterGridListItem from './CharacterGridListItem';
import gql from 'graphql-tag';
import BaseGridList, { BaseGridListProps } from '@/common/BaseGridList';
import {
  CharacterGridList_CharacterFragment,
  Maybe,
} from '@/generated/graphql';

type ListItem = Maybe<CharacterGridList_CharacterFragment>;

function renderItem(character: ListItem) {
  if (character?.id) {
    return <CharacterGridListItem key={character.id} character={character} />;
  }

  return null;
}

type CharacterGridListProps = Pick<
  BaseGridListProps<ListItem>,
  'loading' | 'loadingRef' | 'items'
>;

function CharacterGridList(props: CharacterGridListProps) {
  return <BaseGridList renderItem={renderItem} {...props} />;
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
