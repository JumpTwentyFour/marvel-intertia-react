import React from 'react'
import { CharacterType } from '../types/character'

const CharacterCard = (props: CharacterType): JSX.Element => {
  return <h1>{props.name}</h1>
}

CharacterCard.displayName = 'CharacterCard'

export default CharacterCard
