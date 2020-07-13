import React from "react";
import Profile from "@/components/Profile";
import CharacterGridList from "@/components/CharacterGridList";
import EpisodeCard from "./EpisodeCard";
import gql from "graphql-tag";
import { EpisodeProfile_EpisodeFragment, Maybe } from "@/generated/graphql";

interface EpisodeProfileProps {
  episode: Maybe<EpisodeProfile_EpisodeFragment>;
  loading: boolean;
}

function EpisodeProfile({ episode, loading }: EpisodeProfileProps) {
  const characters = episode?.characters;
  return (
    <Profile
      loading={loading}
      infoCard={episode && <EpisodeCard episode={episode} />}
      fullWidthInfoCard
      mainSectionTitle="Characters"
      mainSection={characters && <CharacterGridList characters={characters} />}
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
