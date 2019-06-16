import React from "react";
import InfiniteScrollWrapper from "components/InfiniteScrollWrapper";
import { GET_EPISODES } from "app-graphql";
import EpisodeList from "components/EpisodeList";
import EpisodesConnectionQuery from "containers/EpisodesConnectionQuery";

function Episodes() {
  return (
    <EpisodesConnectionQuery>
      {({ results, pageInfo, loading, fetchMore }) => {
        return (
          <InfiniteScrollWrapper
            hasNextPage={pageInfo ? pageInfo.next : null}
            loading={loading}
            loadMore={() =>
              fetchMore({
                query: GET_EPISODES,
                variables: { page: pageInfo.next },
                updateQuery: (prevResult, { fetchMoreResult }) => {
                  const newData = {
                    episodes: {
                      ...prevResult.episodes,
                      results: [
                        ...prevResult.episodes.results,
                        ...fetchMoreResult.episodes.results
                      ],
                      info: {
                        ...fetchMoreResult.episodes.info
                      }
                    }
                  };

                  return newData;
                }
              })
            }
          >
            <EpisodeList episodes={results} loading={loading} />
          </InfiniteScrollWrapper>
        );
      }}
    </EpisodesConnectionQuery>
  );
}

export default Episodes;
