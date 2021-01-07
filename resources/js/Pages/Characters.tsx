import React from 'react'
import Layout from '../Layout'
import CharacterList from '../Components/CharacterList'
import { CharactersProps } from '../types/characterProps'

const Characters = (props: CharactersProps): JSX.Element => {
  return <CharacterList characters={props.characters.data} />
}

Characters.displayName = 'Characters'

Characters.layout = (page: JSX.Element): JSX.Element => {
  return <Layout>{page}</Layout>
}

export default Characters
