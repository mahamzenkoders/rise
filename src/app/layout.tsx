import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/providers';
import MobileNavigation from '@/components/MobileNavigation';

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
        <div className='lg:hidden block'>
          {children}
          <MobileNavigation />
        </div>
        <div className='lg:block hidden'>{children}</div>
      </body>
    </html>
  );
}
