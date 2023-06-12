import './globals.css'
import {Sen} from 'next/font/google'
import Footer from '@/app/footer'

const sen = Sen({weight: ['400', '700', '800'], subsets: ['latin']})

export const metadata = {
  title: 'Via Humanis Immobilier',
  description: '',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body className={sen.className}>
      {children}
      <Footer/>
      {/*hidden static HTML form for Netlify */}
      <form hidden={true} name="contact" data-netlify="true">
        <input name="object"/>
        <input name="email"/>
        <input name="message"/>
      </form>
    </body>
    </html>
  )
}
