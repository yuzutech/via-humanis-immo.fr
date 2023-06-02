import Menu from '@/app/menu'

export default function SearchLayout({children}) {
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
