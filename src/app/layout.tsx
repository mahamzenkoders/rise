import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import MobileNavigation from '@/components/MobileNavigation';
import { AppWrapper } from '@/context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rise',
  description: 'Rise App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AppWrapper>
          {' '}
          <div className='lg:hidden block'>
            {children}
            <MobileNavigation role='employer' />
          </div>
          <div className='lg:block hidden'>{children}</div>
        </AppWrapper>
      </body>
    </html>
  );
}
