'use client';

import { NextLink } from '@/common/next-link';
import { GitHubIcon } from '@/icons/github-icon';
import { APP_TITLE } from '@/common/common-utils';
import { NavMenu } from '@/common/nav-menu';
import { useRef } from 'react';

type AppLayoutProps = React.PropsWithChildren;

export function AppLayout({ children }: AppLayoutProps) {
  const headerRef = useRef<React.ElementRef<'header'>>(null);

  return (
    <>
      <header
        ref={headerRef}
        className="flex items-center gap-4 border-b-4 px-6 py-2"
      >
        <NextLink href="/" className="text-lg font-black">
          {APP_TITLE}
        </NextLink>
        <div className="flex-1" />
        <NavMenu headerRef={headerRef} />
        <NextLink
          href="https://github.com/onderonur/rick-and-morty-graphql"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Check the source code on GitHub"
        >
          <GitHubIcon />
        </NextLink>
      </header>
      <main className="mx-auto w-full max-w-screen-xl px-2 py-3 md:p-4">
        {children}
      </main>
    </>
  );
}
