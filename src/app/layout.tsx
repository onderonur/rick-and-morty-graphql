import 'nes.css/css/nes.min.css';
import '@/styles/globals.css';
import { Press_Start_2P } from 'next/font/google';
import BaseQueryClientProvider from '@/query-client/base-query-client-provider';
import AppLayout from '@/app-layout/app-layout';

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-press-start-2p',
  weight: ['400'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      // https://www.radix-ui.com/themes/docs/theme/typography#with-nextfont
      className={pressStart2P.variable}
    >
      <body className={pressStart2P.className}>
        <BaseQueryClientProvider>
          <AppLayout>{children}</AppLayout>
        </BaseQueryClientProvider>
      </body>
    </html>
  );
}
