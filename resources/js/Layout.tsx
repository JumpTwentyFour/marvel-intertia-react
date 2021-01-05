import React from 'react'
import Navigation from './Components/Global/Navigation'

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div className='site-wrapper'>
      <header>
        <div className='container mx-auto'>
          <Navigation />
        </div>
      </header>
      <main>
        <section>
          <div className='container mx-auto'>{children}</div>
        </section>
      </main>
    </div>
  )
}

export default Layout
