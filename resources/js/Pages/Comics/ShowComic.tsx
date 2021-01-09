import React from 'react'
import Layout from '../../Layout'
import { ComicType } from '../../types/comic'
import ComicCard from '../../Components/ComicCard'

interface Props {
  comic: ComicType
}

const ShowComic: React.FC<Props> = ({ comic }) => {
  return (
    <Layout>
      <ComicCard
        id={comic.id}
        title={comic.title}
        description={comic.description}
        thumbnail={comic.thumbnail}
      />
    </Layout>
  )
}

ShowComic.displayName = 'ShowComic'

export default ShowComic
