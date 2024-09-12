'use client';

import { APP_TITLE } from '@/core/core.utils';
import { MobileNavMenu, NavMenu } from '@/core/layout/components/nav-menu';
import { NextLink } from '@/core/routing/components/next-link';
import { Suspense } from 'react';
import { RxGithubLogo } from 'react-icons/rx';

export function Header() {
  return (
    <header className="flex min-h-16 items-center gap-4 px-6">
      <NextLink href="/" className="text-4xl font-bold drop-shadow-clay">
        {APP_TITLE}
      </NextLink>
      <div className="flex-1" />
      <NextLink
        href="https://github.com/onderonur/rick-and-morty-graphql"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Check the source code on GitHub"
      >
        <RxGithubLogo className="text-xl" />
      </NextLink>
      {/* Since we use `useSearchParams` in `MobileNavMenu` under the hood,
      we need to wrap it with `Suspense` for statically rendered pages.
      https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
      https://nextjs.org/docs/app/api-reference/functions/use-search-params#static-rendering */}
      <Suspense>
        <MobileNavMenu />
      </Suspense>
      <NavMenu />
    </header>
  );
}
