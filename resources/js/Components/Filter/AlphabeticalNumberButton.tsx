import React from 'react'
import { FilterButtonProps } from '../../types/components/filter/FilterButtonProps'

const AlphabeticalNumberButton = (props: FilterButtonProps): JSX.Element => {
  return (
    <button
      className='bg-blue-500 hover:bg-white text-white font-bold rounded-full px-1 py-1'
      onClick={() => props.buttonAction()}
    >
      {props.character}
    </button>
  )
}

export default AlphabeticalNumberButton
