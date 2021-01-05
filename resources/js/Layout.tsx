import React from 'react'
import Navigation from './Components/Global/Navigation'

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div className='site-wrapper'>
      <header>
        <nav>
          <Navigation />
        </nav>
      </header>
      <main>
        <section>{children}</section>
      </main>
    </div>
  )
}

export default Layout
