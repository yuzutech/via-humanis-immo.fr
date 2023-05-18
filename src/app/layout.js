import './globals.css'
import {Sen} from 'next/font/google'

const sen = Sen({weight: ['400', '700', '800'], subsets: ['latin']})

export const metadata = {
  title: 'Via Humanis Immobilier',
  description: '',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body className={sen.className}>{children}</body>
    </html>
  )
}
