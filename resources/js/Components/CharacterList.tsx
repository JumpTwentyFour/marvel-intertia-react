import React from 'react'
import { CharacterType } from '../types/character'
import CharacterCard from './CharacterCard'

type CharacterListProps = {
  characters: Array<CharacterType>
}

const CharacterList = (props: CharacterListProps): JSX.Element => {
  if (props.characters.length === 0) {
    return (
      <header className='col-span-6 md:col-span-12 border-b border-solid border-gray-200 border-opacity-10 pb-2.5 mb-5 md:mb-8 xl:mb-10 flex items-center'>
        <h1 className='header-title text-3xl md:text-5xl font-semibold flex-grow'>
          No Characters Found
        </h1>
      </header>
    )
  }
  return (
    <React.Fragment>
      {props.characters.map((character: CharacterType, index: number) => (
        <CharacterCard
          key={index}
          id={character.id}
          name={character.name}
          description={character.description}
          thumbnail={character.thumbnail}
          resourceURI={character.resourceURI}
          comics={character.comics}
          series={character.series}
          stories={character.stories}
          events={character.events}
          urls={character.urls}
        />
      ))}
    </React.Fragment>
  )
}

CharacterList.displayName = 'CharacterList'

export default CharacterList
