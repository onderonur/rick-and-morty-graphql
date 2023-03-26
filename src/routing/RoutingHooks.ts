import { EmptyObject } from '@/common/CommonTypes';
import { Maybe } from '@/gql/graphql';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { parseRouteParams, pruneQueryParams } from './RoutingUtils';

export const useRouteParams = <
  P extends Maybe<EmptyObject> = EmptyObject,
  Q extends Maybe<Record<string, Maybe<string | string[]>>> = EmptyObject,
>() => {
  const router = useRouter();

  const setQueryParams = useCallback(
    (args: Partial<Q>) => {
      router.push({
        query: pruneQueryParams(args),
      });
    },
    [router],
  );

  return {
    routeParams: parseRouteParams<P & Q>(router.query),
    setQueryParams,
  };
};
