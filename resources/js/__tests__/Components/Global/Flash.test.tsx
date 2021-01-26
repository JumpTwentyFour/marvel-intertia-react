import React from 'react'
import { render } from '@testing-library/react'
import Flash from '../../../Components/Global/Flash'

describe('<Flash />', () => {
  test('Will display message', async () => {
    const { getByText } = render(<Flash type='success'>Test Message</Flash>)
    const message = getByText(/Test Message/)
    expect(message).toBeInTheDocument()
  })

  test('Will use green background when success', async () => {
    const { container } = render(<Flash type='success'>Test Message</Flash>)
    expect(container.getElementsByClassName('bg-green-600').length).toBe(1)
  })

  test('Will use red background when error', async () => {
    const { container } = render(<Flash type='error'>Test Message</Flash>)
    expect(container.getElementsByClassName('bg-red-600').length).toBe(1)
  })

  test('Will use amber background when warning', async () => {
    const { container } = render(<Flash type='warning'>Test Message</Flash>)
    expect(container.getElementsByClassName('bg-amber-600').length).toBe(1)
  })
})
