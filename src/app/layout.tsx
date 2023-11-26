import 'nes.css/css/nes.min.css';
import '@/styles/globals.css';
import { Press_Start_2P } from 'next/font/google';
import { BaseQueryClientProvider } from '@/query-client/base-query-client-provider';
import { Layout } from '@/layout/layout';
import type { Viewport } from 'next';
import classNames from 'classnames';

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-press-start-2p',
  weight: ['400'],
});

export const viewport: Viewport = {
  themeColor: '#212529',
};

type RootLayoutProps = React.PropsWithChildren;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      // https://www.radix-ui.com/themes/docs/theme/typography#with-nextfont
      className={classNames(
        pressStart2P.variable,
        '[color-scheme:dark]',
        // fluid font-size:
        // 12px - 16px for 320px - 1024px viewport
        'text-[clamp(0.75rem,0.636rem+0.57vw,1rem)]',
      )}
    >
      <body
        className={classNames(
          pressStart2P.className,
          'bg-[#212529] text-white',
        )}
      >
        <BaseQueryClientProvider>
          <Layout>{children}</Layout>
        </BaseQueryClientProvider>
      </body>
    </html>
  );
}
