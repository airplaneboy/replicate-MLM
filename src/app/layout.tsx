import type { Metadata } from 'next';
import { Inter, Nunito } from 'next/font/google';
import '../../styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' });

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_SITE_NAME}`,
  description: `${process.env.NEXT_PUBLIC_SITE_DESCRIPTION}`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} ${nunito.variable} `}>{children}</body>
    </html>
  );
}
