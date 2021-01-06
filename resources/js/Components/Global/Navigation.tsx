import React, { FC, ReactElement } from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'

const Navigation: FC = (): ReactElement => {
  return (
    <nav className='col-span-6 md:col-span-12'>
      <ul className='site-menu flex justify-center items-center'>
        <li className='site-menu__item'>
          <InertiaLink href='/' className='site-menu__link'>
            Home
          </InertiaLink>
        </li>
        <li className='site-menu__item'>
          <InertiaLink href='/characters' className='site-menu__link'>
            Characters
          </InertiaLink>
        </li>
        <li className='site-menu__item'>
          <InertiaLink href='/comics' className='site-menu__link'>
            Comics
          </InertiaLink>
        </li>
        <li className='site-menu__item'>
          <InertiaLink href='/assemble' className='site-menu__link'>
            Assemble
          </InertiaLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
