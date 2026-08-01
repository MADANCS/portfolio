import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Madan C S | Full-Stack Developer Portfolio',
  description: 'Portfolio of Madan C S — Full-Stack Developer specializing in MERN Stack, Java, and modern web technologies. 1+ years of experience building scalable applications.',
  keywords: ['Full-Stack Developer', 'MERN Stack', 'React', 'Node.js', 'Java', 'Portfolio', 'Madan C S'],
  authors: [{ name: 'Madan C S' }],
  openGraph: {
    title: 'Madan C S | Full-Stack Developer Portfolio',
    description: 'Full-Stack Developer specializing in MERN Stack, Java, and modern web technologies.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
