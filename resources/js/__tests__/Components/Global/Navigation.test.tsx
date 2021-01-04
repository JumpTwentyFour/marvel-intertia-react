import React from 'react'
import { render } from '@testing-library/react'
import Navigation from '../../../Components/Global/Navigation'

describe('<Navigation />', () => {
  test('Should display Assemble navigation element', async () => {
    const { getByText } = render(<Navigation />)
    const link = getByText(/Assemble/)

    expect(link).toBeInTheDocument()
  })

  test('Should display Home navigation element', async () => {
    const { getByText } = render(<Navigation />)
    const link = getByText(/Home/)

    expect(link).toBeInTheDocument()
  })

  test('Should display Characters navigation element', async () => {
    const { getByText } = render(<Navigation />)
    const link = getByText(/Characters/)

    expect(link).toBeInTheDocument()
  })
})
