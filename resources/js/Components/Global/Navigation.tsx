import React, { FC, ReactElement } from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'
import route from 'ziggy-js'

const Navigation: FC = (): ReactElement => {
  return (
    <nav className='col-span-12'>
      <ul className='site-menu flex justify-center items-center'>
        <li className='site-menu__item'>
          <InertiaLink
            href={route('home').toString()}
            className='site-menu__link'
          >
            Home
          </InertiaLink>
        </li>
        <li className='site-menu__item'>
          <InertiaLink
            href={route('characters.list-all').toString()}
            className='site-menu__link'
          >
            Characters
          </InertiaLink>
        </li>
        <li className='site-menu__item'>
          <InertiaLink href={route('comics.list-all').toString()}>
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
