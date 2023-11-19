import { Header } from './header';

type LayoutProps = React.PropsWithChildren;

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-screen-xl px-2 py-3 md:p-4">
        {children}
      </main>
    </>
  );
}
