import React, { FC, ReactElement } from 'react'
import Navigation from './Components/Global/Navigation'

const Layout: FC = ({ children }): ReactElement => {
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
