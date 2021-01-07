import React from 'react'
import Layout from '../Layout'
import { ComicType } from '../types/comic'
import ComicCard from '../Components/ComicCard'

type ComicProps = {
  comic: ComicType
}

const ShowComicPage = (props: ComicProps): JSX.Element => {
  return (
    <ComicCard
      id={props.comic.id}
      title={props.comic.title}
      description={props.comic.description}
      thumbnail={props.comic.thumbnail}
    />
  )
}

ShowComicPage.displayName = 'Comic'

ShowComicPage.layout = (page: JSX.Element): JSX.Element => {
  return <Layout>{page}</Layout>
}

export default ShowComicPage
