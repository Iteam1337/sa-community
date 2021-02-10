import React from 'react'
import { Link } from 'gatsby'

const Component = ({ siteTitle = '' }) => {
  return (
    <header className="bg-saGreen">
      <nav className="flex justify-between items-center px-12">
        <Link to="/" className="text-white text-lg font-bold">
          {siteTitle}
        </Link>
        <ul className="py-4 flex justify-end gap-8 text-white text-lg font-bold max-w-screen-2xl">
          <li>
            <Link to="/">Hem</Link>
          </li>
          <li>
            <Link to="/projekt">Projekt</Link>
          </li>
          <li>
            <Link to="/om-oss">Om oss</Link>
          </li>
          <li>
            <Link to="/nyheter">Nyheter</Link>
          </li>
          <li>
            <Link to="/api">API:er</Link>
          </li>
          <li>
            <Link to="/kommunikation">Kommunikation</Link>
          </li>
          <li>
            <Link to="/kallkod">Källkod</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Component
