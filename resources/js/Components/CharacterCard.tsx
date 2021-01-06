import React from 'react'
import { CharacterType } from '../types/character'

const CharacterCard = (props: CharacterType): JSX.Element => {
  const characterImageUrl = `${props.thumbnail.path}.${props.thumbnail.extension}`
  return (
    <div className='card col-span-6 sm:col-span-3 md:col-span-4 bg-blue shadow-4xl hover:shadow-3xl flex flex-col'>
      <div className='card__image w-full relative overflow-hidden flex items-center content-center'>
        <img src={characterImageUrl} alt={props.name} className='w-full absolute object-cover' />
      </div>
      <div className='card__details flex flex-col p-5 md:p-8 lg:p-10'>
        <h3 className='card__title text-3xl font-semibold'>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

CharacterCard.displayName = 'CharacterCard'

export default CharacterCard
