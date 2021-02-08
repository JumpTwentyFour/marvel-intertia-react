import React from 'react'
import route from 'ziggy-js'
import { InertiaLink } from '@inertiajs/inertia-react'
import { truncate } from '../helpers/truncate'
import { CharacterType } from '../types/character'

const CharacterCard = (props: CharacterType): JSX.Element => {
  const { thumbnail, name, id, description } = props
  const characterImageUrl = `${thumbnail.path}.${thumbnail.extension}`
  return (
    <div
      data-cy='character-card'
      className='card col-span-6 sm:col-span-3 md:col-span-4 bg-blue shadow-4xl hover:shadow-3xl flex flex-col'
    >
      <div className='card__image w-full relative overflow-hidden flex items-center content-center'>
        <img
          src={characterImageUrl}
          alt={name}
          className='w-full absolute object-cover'
        />
      </div>
      <div className='card__details flex flex-col p-5 md:p-8 lg:p-10'>
        <h3 className='card__title text-3xl font-semibold'>
          <InertiaLink
            href={route('characters.view', id).toString()}
            data-cy='view-character-link'
          >
            {name}
          </InertiaLink>
        </h3>
        <p className='mt-6'>{truncate(description, 120)}</p>
      </div>
    </div>
  )
}

CharacterCard.displayName = 'CharacterCard'

export default CharacterCard
