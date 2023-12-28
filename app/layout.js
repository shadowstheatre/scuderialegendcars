import { Oswald } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import './globals.css'


const oswald = Oswald({ subsets: ['latin'] })

export const metadata = {
  title: 'Scuderia Legend Cars',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <Header />
        <main className="flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
