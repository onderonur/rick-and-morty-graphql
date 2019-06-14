import React from "react";
import InfiniteScrollWrapper from "components/InfiniteScrollWrapper";
import { GET_EPISODES } from "app-graphql";
import { Query } from "react-apollo";
import EpisodeList from "components/EpisodeList";

function Episodes() {  return (
    <Query query={GET_EPISODES} notifyOnNetworkStatusChange={true}>
      {({ data, loading, fetchMore }) => {
        const { episodes } = data;
        const results = episodes ? episodes.results : [];
        const pageInfo = episodes ? episodes.info : null;

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
    </Query>
  );
}

export default Episodes;
