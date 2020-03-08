import React from "react";
import { RootRef } from "@material-ui/core";
import {
  useInfiniteScroll,
  useInfiniteScrollProps,
} from "react-infinite-scroll-hook";

type InfiniteScrollWrapper = React.PropsWithChildren<
  Pick<useInfiniteScrollProps, "hasNextPage" | "loading" | "onLoadMore">
>;

function InfiniteScrollWrapper({
  hasNextPage,
  loading,
  onLoadMore,
  children,
}: InfiniteScrollWrapper) {
  const infiniteContainerRef = useInfiniteScroll({
    hasNextPage,
    loading,
    onLoadMore,
  });

  return <RootRef rootRef={infiniteContainerRef}>{children}</RootRef>;
}

export default InfiniteScrollWrapper;
