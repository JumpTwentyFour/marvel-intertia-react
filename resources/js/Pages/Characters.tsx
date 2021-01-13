import React from 'react'
import { Inertia } from '@inertiajs/inertia'
import route from 'ziggy-js'
import Layout from '../Layout'
import CharacterList from '../Components/CharacterList'
import { CharactersProps } from '../types/characterProps'
import Search from '../Components/Global/Search'

const Characters = (props: CharactersProps): JSX.Element => {
  const handleChange = (term: string): void => {
    Inertia.visit(route('characters.list-all').toString(), {
      data: { name: term },
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
          term={params.get('name') ?? undefined}
          isSearchVisible={true}
        />
        <header className='flex-grow mr-5 md:mr-8 xl:mr-10'>
          <h1 className='header-title text-3xl md:text-5xl font-semibold'>
            {params.get('name') ?? 'All Characters'}
          </h1>
        </header>
      </div>
      <CharacterList characters={props.characters.data} />
    </React.Fragment>
  )
}

Characters.displayName = 'Characters'

Characters.layout = (page: JSX.Element): JSX.Element => {
  return <Layout>{page}</Layout>
}

export default Characters
