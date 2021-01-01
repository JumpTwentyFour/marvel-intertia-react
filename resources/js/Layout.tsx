import React, { FC, ReactElement } from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'

const Layout: FC = ({ children }): ReactElement => {
  return (
    <main>
      <header>
        <InertiaLink href='/'>Home</InertiaLink>
        <InertiaLink href='/characters'>Characters</InertiaLink>
        <InertiaLink href='/assemble'>Assemble</InertiaLink>
      </header>
      <article>{children}</article>
    </main>
  )
}

export default Layout
