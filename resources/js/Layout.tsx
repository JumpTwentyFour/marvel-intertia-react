import React, { FC, ReactElement } from 'react'
import Navigation from './Components/Global/Navigation'

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <main>
      <header>
        <nav>
          <Navigation />
        </nav>
      </header>
      <section>{children}</section>
    </main>
  )
}

export default Layout
