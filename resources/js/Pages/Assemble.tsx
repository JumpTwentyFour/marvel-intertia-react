import React from 'react'
import Layout from '../Layout'
import CharacterList from '../Components/CharacterList'
import { CharactersProps } from '../types/characterProps'

const Characters = (props: CharactersProps): JSX.Element => {
  const { characters } = props
  return <CharacterList characters={characters.data} />
}

Characters.displayName = 'Assemble'

Characters.layout = (page: JSX.Element): JSX.Element => {
  return <Layout>{page}</Layout>
}

export default Characters
