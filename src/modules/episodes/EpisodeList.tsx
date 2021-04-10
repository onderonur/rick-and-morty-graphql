import React from "react";
import BaseList, { BaseListProps } from "@/modules/shared/BaseList";
import EpisodeListItem from "./EpisodeListItem";
import gql from "graphql-tag";
import { EpisodeList_EpisodeFragment, Maybe } from "@/generated/graphql";

type ListItem = Maybe<EpisodeList_EpisodeFragment>;

type EpisodeListProps = Pick<
  BaseListProps<ListItem>,
  "items" | "loading" | "loadingRef" | "maxVisibleItemCount"
>;

function renderItem(episode: ListItem) {
  if (episode?.id) {
    return <EpisodeListItem key={episode.id} episode={episode} />;
  }

  return null;
}

function EpisodeList(props: EpisodeListProps) {
  return <BaseList renderItem={renderItem} {...props} />;
}

EpisodeList.fragments = {
  episode: gql`
    fragment EpisodeList_episode on Episode {
      ...EpisodeListItem_episode
    }
    ${EpisodeListItem.fragments.episode}
  `,
};

export default EpisodeList;
