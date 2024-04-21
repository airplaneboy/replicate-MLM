import type { Metadata } from 'next';
import { Inter, Nunito } from 'next/font/google';
import '../../styles/globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
// import { Courier_Prime } from 'next/font/google';

// const courierPrime = Courier_Prime({
//   subsets: ['latin'],
//   weight: '400',
//   variable: '--font-courierPrime',
// });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' });

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_SITE_NAME}`,
  description: `${process.env.NEXT_PUBLIC_SITE_DESCRIPTION}`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} ${nunito.variable} `}>
        <Navbar />
        <div className='pt-20'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
