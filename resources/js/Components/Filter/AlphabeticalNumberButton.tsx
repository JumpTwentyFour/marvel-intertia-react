import React from 'react'
import { FilterButtonProps } from '../../types/components/filter/FilterButtonProps'

const AlphabeticalNumberButton = (props: FilterButtonProps): JSX.Element => {
  const cypressDataAttribute = 'character-filter-button-' + props.character
  return (
    <button
      className='bg-blue-500 hover:bg-white text-white font-bold rounded-full px-1 py-1'
      data-cy={cypressDataAttribute}
      data-testid={cypressDataAttribute}
      onClick={() => props.buttonAction()}
    >
      {props.character}
    </button>
  )
}

export default AlphabeticalNumberButton
