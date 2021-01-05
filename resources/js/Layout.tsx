import React from 'react'
import Navigation from './Components/Global/Navigation'
import route from 'ziggy'
import { Ziggy } from './ziggy.js'

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <main>
      <header>
        <nav>
          <Navigation />
        </nav>
      </header>
      Current Route: {route('characters.list-all', undefined, undefined, Ziggy)}
      <section>{children}</section>
    </main>
  )
}

export default Layout
