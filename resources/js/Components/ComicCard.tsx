import React from 'react'
import { ComicType } from '../types/comic'

const ComicCard = (props: ComicType): JSX.Element => {
  const characterImageUrl = `${props.thumbnail.path}.${props.thumbnail.extension}`
  return (
    <div>
      <h3>{props.title}</h3>
      <img src={characterImageUrl} alt={props.title} />
      <p>{props.description}</p>
    </div>
  )
}

ComicCard.displayName = 'ComicCard'

export default ComicCard
