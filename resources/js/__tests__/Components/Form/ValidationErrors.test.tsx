import React from 'react'
import { render } from '@testing-library/react'
import ValidationErrors from '../../../Components/Form/ValidationErrors'

describe('<ValidationErrors />', () => {
  test('Will render multiple errors', () => {
    const { getByText } = render(
      <ValidationErrors
        errors={{
          email: 'The email field is required.',
          password: 'The password field is required.',
        }}
      />,
    )
    const errorHeading = getByText('Whoops! Something went wrong.')
    expect(errorHeading).toBeInTheDocument()

    const emailErrorMessage = getByText('The email field is required.')
    expect(emailErrorMessage).toBeInTheDocument()

    const passwordErrorMessage = getByText('The password field is required.')
    expect(passwordErrorMessage).toBeInTheDocument()
  })

  test('Will not render when there are no errors', () => {
    const { queryByText } = render(<ValidationErrors errors={{}} />)
    const error = queryByText('Whoops! Something went wrong.')

    expect(error).not.toBeInTheDocument()
  })
})
