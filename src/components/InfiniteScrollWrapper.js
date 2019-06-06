import React from "react";
import { RootRef } from "@material-ui/core";
import { useInfiniteScroll } from "react-infinite-scroll-hook";

function InfiniteScrollWrapper({ hasNextPage, loading, loadMore, children }) {
  const infiniteContainerRef = useInfiniteScroll({
    hasNextPage,
    loading,
    loadMore
  });

  return <RootRef rootRef={infiniteContainerRef}>{children}</RootRef>;
}

export default InfiniteScrollWrapper;
