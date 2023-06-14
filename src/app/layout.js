import './globals.css'
import {Sen} from 'next/font/google'
import Footer from '@/app/footer'

const sen = Sen({weight: ['400', '700', '800'], subsets: ['latin']})

export const metadata = {
  title: 'Via Humanis Immobilier',
  description: '',
}

export default function RootLayout({children}) {
  const netlify = process.env.NETLIFY === 'true'
  const siteId = process.env.SITE_ID
  const deployId = process.env.DEPLOY_ID
  return (
    <html lang="en">
    <body className={sen.className}>
      {children}
      <Footer/>
      {/*hidden static HTML forms for Netlify */}
      <form hidden={true} name="contact" data-netlify="true">
        <input name="object"/>
        <input name="email"/>
        <input name="message"/>
      </form>
      <form hidden={true} name="annonce" data-netlify="true">
        <input name="lastname"/>
        <input name="firstname"/>
        <input name="phone"/>
        <input name="email"/>
        <input name="message"/>
        <input name="id"/>
      </form>
      <form hidden={true} name="estimation" data-netlify="true">
        <input name="propertyCategory"/>
        <input name="propertyRooms"/>
        <input name="propertyAddress"/>
        <input name="type"/>
        <input name="contactInfo"/>
      </form>
      {netlify && <div data-netlify-deploy-id={deployId} data-netlify-site-id={siteId} data-vcs="github" style={{position: "fixed"}}>
        <script async src="https://netlify-cdp-loader.netlify.app/netlify.js"></script>
      </div>}
    </body>
    </html>
  )
}
