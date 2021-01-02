import { InertiaApp } from '@inertiajs/inertia-react'
import React from 'react'
import { render } from 'react-dom'

const app = document.getElementById('app')

const initialPageLoaded = app ? JSON.parse(app.dataset.page!) : '{}'

render(
  <InertiaApp
    initialPage={initialPageLoaded}
    resolveComponent={name =>
      import(`./Pages/${name}`).then(module => module.default)
    }
  />,
  app,
)
