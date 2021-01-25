import React from 'react'
import { usePage } from '@inertiajs/inertia-react'
import Navigation from './Components/Global/Navigation'
import Flash from './Components/Global/Flash'

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const { flash } = usePage().props

  return (
    <div className='site-wrapper min-h-full'>
      <header className='pt-7 border-b border-solid border-gray-200 border-opacity-10'>
        <div className='container'>
          <div className='content'>
            <Navigation />
          </div>
        </div>
      </header>
      <main className='py-14 flex items-stretch justify-center'>
        <section className='w-full flex items-stretch'>
          <div className='container'>
            {flash && <Flash>{flash.message}</Flash>}
            <div className='content min-h-full'>{children}</div>
          </div>
        </section>
      </main>
      <footer className='site-footer pb-7'>
        <div className='container'>
          <div className='content'>
            <div className='col-span-6 md:col-span-12 text-center md:text-right'>
              <p className='text-xs'>
                Data provided by Marvel. &copy; 2014 Marvel
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
