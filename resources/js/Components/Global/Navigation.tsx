import React, { FC, ReactElement } from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'
import route from 'ziggy'
import { Ziggy } from '../../ziggy'

const Navigation: FC = (): ReactElement => {
  return (
    <nav>
      <ul className='flex'>
        <li className='flex-1 justify-center'>
          <InertiaLink href={route('/home', undefined, undefined, Ziggy)}>
            Home
          </InertiaLink>
        </li>
        <li className='flex-1'>
          <InertiaLink
            href={route('characters.list-all', undefined, undefined, Ziggy)}
          >
            Characters
          </InertiaLink>
        </li>
        <li className='flex-1'>
          <InertiaLink href='/assemble'>Assemble</InertiaLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
