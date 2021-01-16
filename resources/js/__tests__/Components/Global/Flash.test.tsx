import React from 'react'
import { render } from '@testing-library/react'
import Flash from '../../../Components/Global/Flash'

describe('<Flash />', () => {
  test('Will display message', async () => {
    const { getByText } = render(<Flash>Test Message</Flash>)
    const message = getByText(/Test Message/)
    expect(message).toBeInTheDocument()
  })
})
