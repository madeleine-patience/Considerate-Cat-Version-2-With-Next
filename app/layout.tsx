import type { Metadata } from 'next';
import ThemeRegistry from './ThemeRegistry';
import '../styles/style.css';

export const metadata: Metadata = {
  title: 'Considerate Cat Tarot',
  description: 'A whimsical tarot reading experience with cats'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
