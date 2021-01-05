import React from 'react'
import Navigation from './Components/Global/Navigation'

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div className='site-wrapper'>
      <header>
        <div className='container'>
          <Navigation />
        </div>
      </header>
      <main>
        <section>
          <div className='container'>
            {children}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Layout
