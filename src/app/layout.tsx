import { Layout } from '@/core/layout/components/layout';
import { BaseQueryClientProvider } from '@/core/query-client/components/base-query-client-provider';
import '@/core/styles/globals.css';
import type { Viewport } from 'next';
import { Fredoka } from 'next/font/google';
import { twJoin } from 'tailwind-merge';

const fredoka = Fredoka({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fredoka',
});

export const viewport: Viewport = {
  themeColor: '#fff',
};

type RootLayoutProps = React.PropsWithChildren;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={twJoin(
        fredoka.variable,
        'font-fredoka',
        // fluid font-size:
        // 12px - 16px for 320px - 1024px viewport
        'text-[clamp(0.75rem,0.636rem+0.57vw,1rem)]',
      )}
    >
      <body
        className={twJoin(
          'bg-gradient-to-b from-background to-transparent bg-fixed',
          // Disable body scrolling when a `<dialog>` is open
          'has-[dialog[open]]:overflow-hidden',
        )}
      >
        <BaseQueryClientProvider>
          <Layout>{children}</Layout>
        </BaseQueryClientProvider>
      </body>
    </html>
  );
}
