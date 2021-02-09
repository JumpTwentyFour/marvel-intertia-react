import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import AlphabeticalNumberButton from '../../../Components/Filter/AlphabeticalNumberButton'

describe('AlphabeticalNumberButton', () => {
  test('Will render and fire event when clicked', async () => {
    const character = String.fromCharCode(65 + Math.floor(Math.random() * 26))
    const buttonAction = jest.fn()
    const renderedElement = render(
      <AlphabeticalNumberButton
        character={character}
        buttonAction={buttonAction}
      />,
    )
    expect(
      renderedElement.getByTestId('character-filter-button-' + character),
    ).toHaveTextContent(character)

    fireEvent.click(
      renderedElement.getByTestId('character-filter-button-' + character),
    )
    expect(buttonAction).toHaveBeenCalled()
  })
})
