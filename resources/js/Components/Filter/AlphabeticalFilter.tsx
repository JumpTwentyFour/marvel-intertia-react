import React from 'react'
import { AlphabetFilterProps } from '../../types/components/filter/AlphabetFilterProps'
import AlphabeticalNumberButton from './AlphabeticalNumberButton'

const AlphabeticalFilter: React.FC<AlphabetFilterProps> = ({
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
