import Menu from '@/app/menu'

export default function ManagementLayout({children}) {
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
