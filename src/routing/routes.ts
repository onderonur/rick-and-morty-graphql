import { AnyFunction, ID } from '@/common/CommonTypes';
import { pruneQueryParams } from './RoutingUtils';
import queryString from 'querystring';

function createRoute<T extends { params?: unknown; query?: unknown }>(
  pathname: string | ((pathParams: T['params']) => string),
) {
  return (args: T) => {
    const path =
      typeof pathname === 'string' ? pathname : pathname(args.params);
    // eslint-disable-next-line deprecation/deprecation
    const search = queryString.stringify(pruneQueryParams(args.query));
    if (search) {
      return `${path}?${search}`;
    }
    return path;
  };
}

export type PathParams<T extends AnyFunction> = Parameters<T>[0] extends {
  params?: unknown;
}
  ? Parameters<T>[0]['params']
  : undefined;
export type QueryParams<T extends AnyFunction> = Parameters<T>[0] extends {
  query?: unknown;
}
  ? Parameters<T>[0]['query']
  : undefined;

export const routes = {
  home: createRoute('/'),
  characters: createRoute<{ query?: { name?: string } }>('/characters'),
  character: createRoute<{ params: { id: ID } }>(
    ({ id }) => `/characters/${id}`,
  ),
  episodes: createRoute('/episodes'),
  episode: createRoute<{ params: { id: ID } }>(({ id }) => `/episodes/${id}`),
  locations: createRoute('/locations'),
  location: createRoute<{ params: { id: ID } }>(({ id }) => `/locations/${id}`),
};
