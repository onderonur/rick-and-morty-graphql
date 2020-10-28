import React from "react";
import { RootRef } from "@material-ui/core";
import useInfiniteScroll, {
  UseInfiniteScrollArgs,
} from "react-infinite-scroll-hook";

type InfiniteScrollWrapperProps = React.PropsWithChildren<
  Pick<UseInfiniteScrollArgs, "hasNextPage" | "loading" | "onLoadMore">
>;

function InfiniteScrollWrapper({
  hasNextPage,
  loading,
  onLoadMore,
  children,
}: InfiniteScrollWrapperProps) {
  const infiniteContainerRef = useInfiniteScroll({
    hasNextPage,
    loading,
    onLoadMore,
  });

  return <RootRef rootRef={infiniteContainerRef}>{children}</RootRef>;
}

export default InfiniteScrollWrapper;
