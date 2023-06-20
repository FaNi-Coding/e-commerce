import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-commerce 2.0',
  description:
    'E-commerce 2.0 is a demo e-commerce site built with Next.js and TypeScript.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header>Header Section</header>
        <main>{children}</main>
        <footer>Footer Section</footer>
      </body>
    </html>
  )
}
