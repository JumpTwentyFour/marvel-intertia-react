import React from 'react'
import { Inertia } from '@inertiajs/inertia'
import route from 'ziggy-js'
import Layout from '../Layout'
import { ComicType } from '../types/comic'
import ComicList from '../Components/ComicList'
import Search from '../Components/Global/Search'

type ComicsProps = {
  comics: Record<'data', Array<ComicType>>
}

const Comics = (props: ComicsProps): JSX.Element => {
  const handleChange = (term: string): void => {
    Inertia.visit(route('comics.list-all').toString(), {
      data: { title: term },
      preserveState: true,
    })
  }

  const params = new URLSearchParams(window.location.search)

  return (
    <React.Fragment>
      <div
        className='page-title col-span-6 md:col-span-12 relative
      border-b border-solid border-gray-200 border-opacity-10 pb-2.5
      mb-5 md:mb-8 xl:mb-10 flex items-center flex-row-reverse'
      >
        <Search
          handleChange={handleChange}
          term={params.get('title') ?? undefined}
        />
        <header className='flex-grow mr-5 md:mr-8 xl:mr-10'>
          <h1 className='header-title text-3xl md:text-5xl font-semibold'>
            {params.get('title') ?? 'All Comics'}
          </h1>
        </header>
      </div>
      <ComicList comics={props.comics.data} />
    </React.Fragment>
  )
}

Comics.displayName = 'Comics'

Comics.layout = (page: JSX.Element): JSX.Element => {
  return <Layout>{page}</Layout>
}

export default Comics
