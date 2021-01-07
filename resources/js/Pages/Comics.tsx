import React from 'react'
import Layout from '../Layout'
import { ComicType } from '../types/comic'
import ComicList from '../Components/ComicList'
import Search from '../Components/Global/Search'

type ComicsProps = {
  comics: Record<'data', Array<ComicType>>
}

const Comics = (props: ComicsProps): JSX.Element => {
  return (
    <React.Fragment>
      <Search />
      <ComicList comics={props.comics.data} />
    </React.Fragment>
  )
}

Comics.displayName = 'Comics'

Comics.layout = (page: JSX.Element): JSX.Element => {
  return <Layout>{page}</Layout>
}

export default Comics
