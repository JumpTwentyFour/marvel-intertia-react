import React, { FC, ReactElement } from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'

const Navigation: FC = (): ReactElement => {
  return (
    <nav>
      <ul className='flex'>
        <li className='flex-1 justify-center'>
          <InertiaLink href='/'>Home</InertiaLink>
        </li>
        <li className='flex-1'>
          <InertiaLink href='/characters'>Characters</InertiaLink>
        </li>
        <li className='flex-1'>
          <InertiaLink href='/assemble'>Assemble</InertiaLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
