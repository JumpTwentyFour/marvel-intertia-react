import React from 'react'
import { truncate } from '../helpers/truncate'
import { ComicType } from '../types/comic'

const ComicCard = (props: ComicType): JSX.Element => {
  const characterImageUrl = `${props.thumbnail.path}.${props.thumbnail.extension}`
  return (
    <div
      data-cy='comic-card'
      className='card col-span-12 md:col-span-6 lg:col-span-4 bg-blue shadow-4xl hover:shadow-3xl flex flex-col'
    >
      <div className='card__image card__image--comic w-full flex items-center content-center'>
        <img
          src={characterImageUrl}
          alt={props.title}
          className='w-full object-cover'
        />
      </div>
      <div className='card__details flex flex-col p-5 md:p-8 lg:p-10'>
        <h3 className='card__title text-3xl font-semibold'>{props.title}</h3>
        {props.description && (
          <p className='mt-6'>{truncate(props.description, 150)}</p>
        )}
      </div>
    </div>
  )
}

ComicCard.displayName = 'ComicCard'

export default ComicCard
