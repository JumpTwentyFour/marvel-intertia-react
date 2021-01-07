import React from 'react'
import Layout from '../Layout'
import { CharacterType } from '../types/character'
import CharacterList from '../Components/CharacterList'

type CharactersProps = {
  characters: Record<'data', Array<CharacterType>>
}

const Characters = (props: CharactersProps): JSX.Element => {
  return <CharacterList characters={props.characters.data} />
}

Characters.displayName = 'Assemble'

Characters.layout = (page: JSX.Element): JSX.Element => {
  return <Layout>{page}</Layout>
}

export default Characters
