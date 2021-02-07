import React from 'react'
import { ComicType } from '../types/comic'
import ComicCard from './ComicCard'

type ComicListProps = {
  comics: Array<ComicType>
}

const ComicList = (props: ComicListProps): JSX.Element => {
  const { comics } = props
  if (comics.length === 0) {
    return (
      <header className='col-span-6 md:col-span-12 border-b border-solid border-gray-200 border-opacity-10 pb-2.5 mb-5 md:mb-8 xl:mb-10 flex items-center'>
        <h1 className='header-title text-3xl md:text-5xl font-semibold flex-grow'>
          No Comics Found
        </h1>
      </header>
    )
  }
  return (
    <React.Fragment>
      {comics.map((comic: ComicType, index: number) => (
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
