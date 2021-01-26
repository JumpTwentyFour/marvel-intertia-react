import React from 'react'
import { render } from '@testing-library/react'
import Status from '../../../Components/Form/Status'

describe('<Status />', () => {
  test('Will render value', () => {
    const { getByText } = render(<Status value='This is a test message.' />)
    const errorHeading = getByText('This is a test message.')
    expect(errorHeading).toBeInTheDocument()
  })
})
