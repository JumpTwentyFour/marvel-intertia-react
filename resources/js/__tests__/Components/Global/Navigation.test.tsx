import React from 'react'
import { render } from '@testing-library/react'
import Navigation from '../../../Components/Global/Navigation'

describe('<Navigation />', () => {
  test('Should display Assemble navigation element', async () => {
    const { getByText } = render(<Navigation authenticated={true} />)
    const link = getByText(/Assemble/)

    expect(link).toBeInTheDocument()
  })

  test('Should display Home navigation element', async () => {
    const { getByText } = render(<Navigation authenticated={true} />)
    const link = getByText(/Home/)

    expect(link).toBeInTheDocument()
  })

  test('Should display Characters navigation element', async () => {
    const { getByText } = render(<Navigation authenticated={true} />)
    const link = getByText(/Characters/)

    expect(link).toBeInTheDocument()
  })

  test('Should display Login navigation element when not logged in', async () => {
    const { getByText } = render(<Navigation authenticated={false} />)
    const link = getByText(/Login/)

    expect(link).toBeInTheDocument()
  })

  test('Should display Logout navigation element when logged in', async () => {
    const { getByText } = render(<Navigation authenticated={true} />)
    const link = getByText(/Logout/)

    expect(link).toBeInTheDocument()
  })
})
