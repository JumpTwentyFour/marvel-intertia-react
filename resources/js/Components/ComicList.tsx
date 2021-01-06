import React from 'react'
import { ComicType } from '../types/comic'
import CharacterCard from './CharacterCard'
import ComicCard from "./ComicCard";

type ComicListProps = {
  comics: Array<ComicType>
}

const ComicList = (props: ComicListProps): JSX.Element => {
  if (props.comics.length === 0) {
    return <h2>No Comics Found</h2>
  }
  return (
    <React.Fragment>
      {props.comics.map((comic: ComicType, index: number) => (
        <ComicCard
          key={index}
          id={comic.id}
          title={comic.title}
          description={comic.description}
          thumbnail={comic.thumbnail}
        />
      ))}
    </React.Fragment>
  )
}

ComicList.displayName = 'ComicList'

export default ComicList
