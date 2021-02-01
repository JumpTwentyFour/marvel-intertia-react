import React from 'react'

type FilterButtonProps = {
  character: string
  buttonAction: (character: string) => void
}

const AlphabeticalNumberButton = (props: FilterButtonProps): JSX.Element => {
  // console.log(props.buttonAction)
  return (
    <button
      className='bg-blue-500 hover:bg-white text-white font-bold rounded-full px-1 py-1'
      onClick={() => props.buttonAction(props.character)}
    >
      {props.character}
    </button>
  )
}

export default AlphabeticalNumberButton
