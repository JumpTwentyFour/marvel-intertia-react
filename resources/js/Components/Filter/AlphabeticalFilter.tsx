import React from 'react'
import AlphabeticalNumberButton from './AlphabeticalNumberButton'

interface AlphabetFilterType {
  characters: Array<string>
  buttonAction: (character: string) => void
}

const AlphabeticalFilter: React.FC<AlphabetFilterType> = ({
  characters,
  buttonAction,
}) => {
  return (
    <React.Fragment>
      <div className='col-span-6 md:col-span-12 inline-flex justify-between'>
        {characters.map((character: string, key: number) => (
          <AlphabeticalNumberButton
            key={key}
            character={character}
            buttonAction={() => {
              buttonAction(character)
            }}
          />
        ))}
      </div>
    </React.Fragment>
  )
}

export default AlphabeticalFilter
