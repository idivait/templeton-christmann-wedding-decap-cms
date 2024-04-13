import * as React from "react"
import { Link } from "gatsby"
import Nav from "./nav"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const header = (
    <Link className="basis-full md:basis-1/2 self-center text-center text-lg font-bold" to="/">
      {title}
    </Link>
  )

  return (
    <div data-is-root-path={isRootPath}>
      <header className="w-full flex flex-col md:flex-row justify-end items-center bg-blush text-navy p-4">
        {header}
        <Nav/>
      </header>
      <main className="container mx-auto mt-8">
        {children}
      </main>
      <footer className="text-center">
        © {new Date().getFullYear()}, Built by
        {` `}
        <a className="text-blush" href="https://www.idiva.it">iDiva.IT</a>
      </footer>
    </div>
  )
}

export default Layout
