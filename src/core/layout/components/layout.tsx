import { Header } from '@/core/layout/components/header';

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div className="mx-auto w-full max-w-screen-xl p-4 md:p-6">
        {children}
      </div>
    </>
  );
}
