import React from 'react'
import Layout from '../Layout'
import CharacterCard from '../Components/CharacterCard'
import { CharacterType } from '../types/character'

type CharactersProps = {
  characters: Record<'data', Array<CharacterType>>
}

const Characters = (props: CharactersProps): JSX.Element => {
  if (props.characters.data.length === 0) {
    return <h2>No Characters Found</h2>
  }
  return (
    <>
      {props.characters.data.map((character: CharacterType, index: number) => (
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
    </>
  )
}

Characters.displayName = 'Characters'

Characters.layout = (page: JSX.Element): JSX.Element => {
  return <Layout>{page}</Layout>
}

export default Characters
