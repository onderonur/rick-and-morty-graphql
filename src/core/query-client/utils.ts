// https://tanstack.com/query/latest/docs/react/guides/advanced-ssr#alternative-use-a-single-queryclient-for-prefetching
import { QueryClient } from '@tanstack/react-query';
import { cache } from 'react';

// cache() is scoped per request, so we don't leak data between requests
export const getQueryClient = cache(() => new QueryClient());
