import React from 'react';
import Profile from '@/common/Profile';
import CharacterGridList from '@/characters/CharacterGridList';
import EpisodeCard from './EpisodeCard';
import gql from 'graphql-tag';
import { EpisodeProfile_EpisodeFragment, Maybe } from '@/generated/graphql';

interface EpisodeProfileProps {
  episode: Maybe<EpisodeProfile_EpisodeFragment>;
  loading: boolean;
}

function EpisodeProfile({ episode, loading }: EpisodeProfileProps) {
  const characters = episode?.characters;
  return (
    <Profile
      loading={loading}
      infoCard={episode && <EpisodeCard titleAs="h1" episode={episode} />}
      fullWidthInfoCard
      mainSectionTitle="Characters"
      mainSection={characters && <CharacterGridList items={characters} />}
    />
  );
}

EpisodeProfile.fragments = {
  episode: gql`
    fragment EpisodeProfile_episode on Episode {
      ...EpisodeCard_episode
      characters {
        ...CharacterGridList_character
      }
    }
    ${EpisodeCard.fragments.episode}
    ${CharacterGridList.fragments.character}
  `,
};

export default EpisodeProfile;
