import React, { useState, useEffect } from 'react'
import { Inertia } from '@inertiajs/inertia'
import route from 'ziggy-js'
import ReactPaginate from 'react-paginate'
import Layout from '../../Layout'
import CharacterList from '../../Components/CharacterList'
import { CharactersProps } from '../../types/characterProps'
import Search from '../../Components/Global/Search'

const List = (props: CharactersProps): JSX.Element => {
  const params = new URLSearchParams(window.location.search)
  const { characters } = props

  const [state, setState] = useState({
    page: Number(params.get('page') ?? 1),
    name: '',
  })

  const handleSearchChange = (term: string): void => {
    setState({ ...state, name: term, page: 1 })
  }

  const onPageChange = (selectedItem: { selected: number }): void => {
    setState({ ...state, page: selectedItem.selected + 1 })
  }

  useEffect(() => {
    let data = {}

    if (state.page > 1) {
      data = { ...data, page: state.page }
    }

    if (state.name.length > 0) {
      data = { ...data, name: state.name }
    }

    Inertia.visit(route('characters.list-all').toString(), {
      data: data,
      preserveState: true,
    })
  }, [state])

  return (
    <React.Fragment>
      <div
        className='page-title col-span-6 md:col-span-12 relative
      border-b border-solid border-gray-200 border-opacity-10 pb-2.5
      mb-5 md:mb-8 xl:mb-10 flex items-center flex-row-reverse'
      >
        <Search
          handleChange={handleSearchChange}
          term={params.get('name') ?? undefined}
        />
        <header className='flex-grow mr-5 md:mr-8 xl:mr-10'>
          <h1
            data-cy='title'
            className='header-title text-3xl md:text-5xl font-semibold'
          >
            {params.get('name') ?? 'All Characters'}
          </h1>
        </header>
      </div>
      <CharacterList characters={characters.data} />
      <ReactPaginate
        disableInitialCallback={true}
        initialPage={state.page - 1}
        pageCount={characters.meta.lastPage}
        marginPagesDisplayed={2}
        pageRangeDisplayed={1}
        onPageChange={onPageChange}
        breakClassName='pagination__item'
        breakLinkClassName='pagination__link'
        pageClassName='pagination__item'
        pageLinkClassName='pagination__link'
        previousClassName='pagination__item previous'
        nextClassName='pagination__item next'
        previousLinkClassName='pagination__link'
        nextLinkClassName='pagination__link'
        previousLabel=''
        nextLabel=''
        containerClassName='pagination col-span-6 md:col-span-12 flex justify-center items-center mt-5 md:mt-8 xl:mt-10'
      />
    </React.Fragment>
  )
}

List.displayName = 'Characters'

List.layout = (page: JSX.Element): JSX.Element => {
  return <Layout>{page}</Layout>
}

export default List
