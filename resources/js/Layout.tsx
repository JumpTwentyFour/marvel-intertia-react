import React from 'react'
import Navigation from './Components/Global/Navigation'

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div className='site-wrapper'>
      <header className='pt-7 border-b border-solid border-gray-200 border-opacity-10'>
        <div className='container'>
          <div className='content'>
            <Navigation />
          </div>
        </div>
      </header>
      <main className='py-14'>
        <section>
          <div className='container'>
            <div className='content'>
              {children}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Layout
