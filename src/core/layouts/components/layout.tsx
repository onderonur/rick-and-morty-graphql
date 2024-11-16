import { NextLink } from '@/core/routing/components/next-link';
import { APP_TITLE } from '@/core/shared/shared.utils';
import { RxGithubLogo } from 'react-icons/rx';
import { MobileNavMenu, NavMenu } from './nav-menu';

function LayoutHeader() {
  return (
    <header className="sticky top-0 z-50 flex min-h-16 items-center gap-4 border-b bg-background/60 px-4 backdrop-blur">
      <NextLink href="/" className="text-xl font-black">
        {APP_TITLE}
      </NextLink>
      <NavMenu />
      <MobileNavMenu />
      <div className="flex-1" />
      <NextLink
        href="https://github.com/onderonur/next-rickql"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Check the source code on GitHub"
      >
        <RxGithubLogo className="text-xl" />
      </NextLink>
    </header>
  );
}

function LayoutFooter() {
  return (
    <footer className="sticky bottom-0 grid min-h-14 place-content-center border-t bg-background/60 px-6 backdrop-blur">
      {APP_TITLE}
    </footer>
  );
}

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto grid min-h-screen max-w-screen-xl grid-rows-[auto_1fr_auto] *:min-w-0 xl:border-x">
      <LayoutHeader />
      <div className="bg-pattern">
        <div className="h-full bg-background/60">
          <div className="fixed inset-0 -z-10 grid place-content-center">
            <div className="size-[32rem] rounded-full bg-primary/60 blur-[16rem]" />
          </div>
          <div className="mx-auto max-w-screen-md p-2 sm:p-6">{children}</div>
        </div>
      </div>
      <LayoutFooter />
    </div>
  );
}
