import React from 'react'
import { Inertia } from '@inertiajs/inertia'
import Layout from '../Layout'
import { ComicType } from '../types/comic'
import ComicList from '../Components/ComicList'
import Search from '../Components/Global/Search'

type ComicsProps = {
  comics: Record<'data', Array<ComicType>>
}

const Comics = (props: ComicsProps): JSX.Element => {
  const handleChange = (term: string): void => {
    Inertia.visit('/comics', { data: { title: term }, preserveState: true })
  }

  const params = new URLSearchParams(window.location.search)

  return (
    <React.Fragment>
      <Search
        handleChange={handleChange}
        term={params.get('title') ?? undefined}
      />
      <ComicList comics={props.comics.data} />
    </React.Fragment>
  )
}

Comics.displayName = 'Comics'

Comics.layout = (page: JSX.Element): JSX.Element => {
  return <Layout>{page}</Layout>
}

export default Comics
