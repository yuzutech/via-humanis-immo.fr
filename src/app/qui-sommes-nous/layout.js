import Menu from '@/app/menu'

export default function AboutLayout({children}) {
  return (
    <>
      <header>
        <Menu/>
      </header>
      <main>
        {children}
      </main>
    </>
  )
}
