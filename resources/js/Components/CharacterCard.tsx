import React from 'react'
import { CharacterType } from '../types/character'

const CharacterCard = (props: CharacterType): JSX.Element => {
  const characterImageUrl = `${props.thumbnail.path}.${props.thumbnail.extension}`
  return (
    <div className='card col-span-6 sm:col-span-3 md:col-span-4 mb-10 bg-blue shadow-4xl hover:shadow-3xl'>
      <h3>{props.name}</h3>
      <img src={characterImageUrl} alt={props.name} />
      <p>{props.description}</p>
    </div>
  )
}

CharacterCard.displayName = 'CharacterCard'

export default CharacterCard
