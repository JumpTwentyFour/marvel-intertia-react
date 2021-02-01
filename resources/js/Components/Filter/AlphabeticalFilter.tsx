import React from 'react'
import AlphabeticalNumberButton from './AlphabeticalNumberButton'

type AlphabetFilterType = {
  characters: Array<string>
  buttonAction: (character: string) => void
}

const AlphabeticalFilter = (props: AlphabetFilterType): JSX.Element => {
  return (
    <React.Fragment>
      <div className='col-span-6 md:col-span-12 inline-flex justify-between'>
        {props.characters.map((character: string, key: number) => (
          <AlphabeticalNumberButton
            key={key}
            character={character}
            buttonAction={() => {
              props.buttonAction(character)
            }}
          />
        ))}
      </div>
    </React.Fragment>
  )
}

export default AlphabeticalFilter
