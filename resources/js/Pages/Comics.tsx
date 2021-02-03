import React, { useEffect, useState } from 'react'
import { Inertia } from '@inertiajs/inertia'
import route from 'ziggy-js'
import Layout from '../Layout'
import ComicList from '../Components/ComicList'
import Search from '../Components/Global/Search'
import AlphabeticalFilter from '../Components/Filter/AlphabeticalFilter'
import { ComicsProps } from '../types/comicProps'
import AlphabeticalNumberButton from '../Components/Filter/AlphabeticalNumberButton'

const Comics = (props: ComicsProps): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState('')
  const [character, setCharacter] = useState('')

  const handleSearchChange = (term: string): void => {
    setSearchTerm(term)
  }

  const buttonAction = (character: string): void => {
    setCharacter(character)
  }

  useEffect(() => {
    const data = {
      ...(searchTerm && { title: searchTerm }),
      ...(character && { titleStartsWith: character }),
    }

    Inertia.visit(route('comics.list-all').toString(), {
      data,
      preserveState: true,
    })
  }, [searchTerm, character])

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
      <AlphabeticalFilter>
        {alphabet.map((character: string, key: number) => (
          <AlphabeticalNumberButton
            key={key}
            character={character}
            buttonAction={() => {
              buttonAction(character)
            }}
          />
        ))}
      </AlphabeticalFilter>
      <ComicList comics={props.comics.data} />
    </React.Fragment>
  )
}

Comics.displayName = 'Comics'

Comics.layout = (page: JSX.Element): JSX.Element => {
  return <Layout>{page}</Layout>
}

export default Comics
