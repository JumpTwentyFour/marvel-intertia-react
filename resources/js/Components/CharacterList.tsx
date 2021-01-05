import React from 'react'
import { CharacterType } from '../types/character'
import CharacterCard from './CharacterCard'

type CharacterListProps = {
  characters: Array<CharacterType>
}

const CharacterList = (props: CharacterListProps): JSX.Element => {
  if (props.characters.length === 0) {
    return <h2>No Characters Found</h2>
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
