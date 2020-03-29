import React from "react";
import EpisodeProfile from "./components/EpisodeProfile";
import gql from "graphql-tag";
import { useGetEpisodeQuery } from "@/generated/graphql";
import { useRouter } from "next/router";
import { isNonEmptyString, getDocumentTitle } from "@/shared/utils";
import Head from "next/head";

const GET_EPISODE = gql`
  query GetEpisode($id: ID!) {
    episode(id: $id) {
      name
      ...EpisodeProfile_episode
    }
  }
  ${EpisodeProfile.fragments.episode}
`;

function Episode() {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading } = useGetEpisodeQuery({
    query: GET_EPISODE,
    variables: isNonEmptyString(id) ? { id } : undefined,
    skip: !isNonEmptyString(id),
  });

  const episode = data?.episode;

  return (
    <>
      <Head>
        <title>{getDocumentTitle(episode?.name)}</title>
      </Head>
      <EpisodeProfile episode={episode} loading={loading} />
    </>
  );
}

export default Episode;
