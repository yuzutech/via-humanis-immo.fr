import Menu from '@/app/menu'

export default function SalesLayout({children}) {
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
