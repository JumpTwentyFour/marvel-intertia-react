import React, {useEffect, useState} from 'react'
import { Inertia } from '@inertiajs/inertia'
import route from 'ziggy-js'
import Layout from '../Layout'
import { ComicType } from '../types/comic'
import ComicList from '../Components/ComicList'
import Search from '../Components/Global/Search'
import AlphabeticalFilter from '../Components/Filter/AlphabeticalFilter'
import {comicTypeMock} from "../mocks/comic";

type ComicsProps = {
  comics: Record<'data', Array<ComicType>>
}

const Comics = (props: ComicsProps): JSX.Element => {
  const [state, setState] = useState({
    searchTerm: '',
    character: '',
  })

  const handleSearchChange = (term: string): void => {
    setState({ ...state, searchTerm: term })
  }

  const buttonAction = (character: string): void => {
    setState({ ...state, character: character })
  }

  useEffect(() => {
    let data = {}

    if (state.searchTerm) {
      data = { ...data, title: state.searchTerm }
    }

    if (state.character) {
      data = { ...data, titleStartsWith: state.character }
    }

    Inertia.visit(route('comics.list-all').toString(), {
      data: data,
      preserveState: true,
    })
  }, [state])

  const params = new URLSearchParams(window.location.search)

  const alphabet = new Array(26)
    .fill(1)
    .map((_, i) => String.fromCharCode(65 + i))

  return (
    <React.Fragment>
      <div
        className='page-title col-span-6 md:col-span-12 relative
      border-b border-solid border-gray-200 border-opacity-10 pb-2.5
      mb-5 md:mb-8 xl:mb-10 flex items-center flex-row-reverse'
      >
        <Search
          handleChange={handleSearchChange}
          term={params.get('title') ?? undefined}
        />
        <header className='flex-grow mr-5 md:mr-8 xl:mr-10'>
          <h1 className='header-title text-3xl md:text-5xl font-semibold'>
            {params.get('title') ?? 'All Comics'}
          </h1>
        </header>
      </div>
      <AlphabeticalFilter buttonAction={buttonAction} characters={alphabet} />
      <ComicList comics={props.comics.data} />
    </React.Fragment>
  )
}

Comics.displayName = 'Comics'

Comics.layout = (page: JSX.Element): JSX.Element => {
  return <Layout>{page}</Layout>
}

export default Comics
