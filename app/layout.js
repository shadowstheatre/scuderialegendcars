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
      <head>
        <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </head>
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
