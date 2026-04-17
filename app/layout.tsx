import type { Metadata } from 'next';
import { Geist, Geist_Mono, Fraunces } from 'next/font/google';
import './globals.css';
import { MotionConfigProvider } from '@/components/ui/MotionConfigProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  axes: ['SOFT', 'opsz'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'theVowBooks — Run your staffing business with confidence',
  description:
    'Consultants, timesheets, and invoices in one calm, multi-tenant workspace. Built for staffing teams that want to ship cleaner ops.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable}`}
    >
      <body>
        <MotionConfigProvider>{children}</MotionConfigProvider>
      </body>
    </html>
  );
}
