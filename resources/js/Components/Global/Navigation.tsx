import React, { FC, ReactElement } from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'

const Navigation: FC = (): ReactElement => {
  return (
    <nav>
      <ul className='flex'>
        <li>
          <InertiaLink href='/'>Home</InertiaLink>
        </li>
        <li>
          <InertiaLink href='/characters'>Characters</InertiaLink>
        </li>
        <li>
          <InertiaLink href='/assemble'>Assemble</InertiaLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
