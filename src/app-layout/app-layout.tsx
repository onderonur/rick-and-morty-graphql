'use client';

import NextLink from '@/common/next-link';
import GitHubIcon from '@/icons/github-icon';
import { APP_TITLE } from '@/common/common-utils';
import NavMenu from '@/common/nav-menu';
import { useRef } from 'react';

type AppLayoutProps = React.PropsWithChildren;

export default function AppLayout({ children }: AppLayoutProps) {
  const headerRef = useRef<React.ElementRef<'header'>>(null);

  return (
    <>
      <header
        ref={headerRef}
        className="flex gap-4 items-center py-2 px-6 border-b-4"
      >
        <NextLink href="/" className="font-black text-lg">
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
      <main className="max-w-screen-xl w-full mx-auto px-2 py-3 md:p-4">
        {children}
      </main>
    </>
  );
}
