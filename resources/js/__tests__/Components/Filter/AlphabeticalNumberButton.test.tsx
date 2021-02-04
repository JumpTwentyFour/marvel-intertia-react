import React from 'react'
import { render } from '@testing-library/react'
import AlphabeticalNumberButton from '../../../Components/Filter/AlphabeticalNumberButton'

describe('AlphabeticalNumberButton', () => {
  test('Will render character', async () => {
    const renderedElement = render(
      <AlphabeticalNumberButton character='A' buttonAction={() => {}} />,
    )
    renderedElement.getByText(/^A$/i)
  })
})
