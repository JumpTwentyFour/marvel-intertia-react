import React from 'react'
import { CharacterType } from '../types/character'

const CharacterCard = (props: CharacterType): JSX.Element => {
  const characterImageUrl = `${props.thumbnail.path}.${props.thumbnail.extension}`
  return (
    <div>
      <h3>{props.name}</h3>
      <img src={characterImageUrl} alt={props.name} />
      <p>{props.description}</p>
    </div>
  )
}

CharacterCard.displayName = 'CharacterCard'

export default CharacterCard
