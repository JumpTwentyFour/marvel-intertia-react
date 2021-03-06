import React, { ReactElement } from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'
import route from 'ziggy-js'

type NavProps = {
  authenticated: boolean
}

const Navigation = (props: NavProps): ReactElement => {
  const { authenticated } = props
  const renderAuthLinks = (): ReactElement => {
    if (authenticated) {
      return (
        <li className='site-menu__item'>
          <InertiaLink
            href={route('logout').toString()}
            method='post'
            as='button'
            type='button'
            className='site-menu__link'
          >
            Logout
          </InertiaLink>
        </li>
      )
    }

    return (
      <li className='site-menu__item'>
        <InertiaLink
          href={route('login').toString()}
          as='button'
          type='button'
          className='site-menu__link'
        >
          Login
        </InertiaLink>
      </li>
    )
  }

  return (
    <nav data-cy='navigation' className='col-span-6 md:col-span-12'>
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
          <InertiaLink
            href={route('comics.list-all').toString()}
            className='site-menu__link'
          >
            Comics
          </InertiaLink>
        </li>
        <li className='site-menu__item'>
          <InertiaLink
            href={route('characters.assemble').toString()}
            className='site-menu__link'
          >
            Assemble
          </InertiaLink>
        </li>
        {renderAuthLinks()}
      </ul>
    </nav>
  )
}

export default Navigation
