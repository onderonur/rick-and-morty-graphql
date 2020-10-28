import React from "react";
import gql from "graphql-tag";
import { useGetEpisodeQuery } from "@/generated/graphql";
import { useRouter } from "next/router";
import { isNonEmptyString } from "@/modules/shared/SharedUtils";
import BaseSeo from "@/modules/seo/BaseSeo";
import EpisodeProfile from "@/modules/episodes/EpisodeProfile";

const GET_EPISODE = gql`
  query GetEpisode($id: ID!) {
    episode(id: $id) {
      name
      ...EpisodeProfile_episode
    }
  }
  ${EpisodeProfile.fragments.episode}
`;

function EpisodeDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading, error } = useGetEpisodeQuery({
    query: GET_EPISODE,
    variables: isNonEmptyString(id) ? { id } : undefined,
    skip: !isNonEmptyString(id),
  });

  if (error) {
    throw error;
  }

  const episode = data?.episode;

  return (
    <>
      <BaseSeo title={episode?.name || ""} />
      <EpisodeProfile episode={episode} loading={loading} />
    </>
  );
}

export default EpisodeDetail;
