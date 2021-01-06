import React, { FC, ReactElement } from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'
import route from 'ziggy-js'

const Navigation: FC = (): ReactElement => {
  return (
    <nav>
      <ul className='flex'>
        <li className='flex-1 justify-center'>
          <InertiaLink href={route('home').toString()}>Home</InertiaLink>
        </li>
        <li className='flex-1'>
          <InertiaLink href={route('characters.list-all').toString()}>Characters</InertiaLink>
        </li>
        <li className='flex-1'>
          <InertiaLink href='/assemble'>Assemble</InertiaLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
