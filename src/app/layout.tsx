import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';

const urbanist = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Estatein - Your Real Estate Journey Starts Here',
  description: 'Discover the finest properties with Estatein, your trusted real estate partner. We offer a variety of incredible properties for sale and rent. Find your dream home today!'
};

export default function RootLayout({ children }: { children: ReactNode; }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>{children}</body>
    </html>
  );
}
