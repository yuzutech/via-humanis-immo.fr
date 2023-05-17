import Menu from '@/app/menu'

export default function GestionLocativeLayout({children}) {
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
