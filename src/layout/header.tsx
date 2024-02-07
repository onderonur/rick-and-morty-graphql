'use client';

import { NextLink } from '@/common/next-link';
import { GitHubIcon } from '@/icons/github-icon';
import { APP_TITLE } from '@/common/common-utils';
import { MobileNavMenu, NavMenu } from '@/common/nav-menu';
import { Suspense, useRef } from 'react';

export function Header() {
  const headerRef = useRef<React.ElementRef<'header'>>(null);

  return (
    <header
      ref={headerRef}
      className="flex items-center gap-4 border-b-4 px-6 py-2"
    >
      <NextLink href="/" className="text-lg font-black">
        {APP_TITLE}
      </NextLink>
      <div className="flex-1" />
      {/* Since we use `useSearchParams` in `MobileNavMenu` under the hood,
      we need to wrap it with `Suspense` for statically rendered pages.
      https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
      https://nextjs.org/docs/app/api-reference/functions/use-search-params#static-rendering */}
      <Suspense>
        <MobileNavMenu headerRef={headerRef} />
      </Suspense>
      <NavMenu />
      <NextLink
        href="https://github.com/onderonur/rick-and-morty-graphql"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Check the source code on GitHub"
      >
        <GitHubIcon />
      </NextLink>
    </header>
  );
}
