import React, { useState, useEffect } from 'react'
import { Inertia } from '@inertiajs/inertia'
import route from 'ziggy-js'
import ReactPaginate from 'react-paginate'
import Layout from '../Layout'
import CharacterList from '../Components/CharacterList'
import { CharactersProps } from '../types/characterProps'
import Search from '../Components/Global/Search'

const Characters = (props: CharactersProps): JSX.Element => {
  const params = new URLSearchParams(window.location.search)

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
      <Search
        handleChange={handleSearchChange}
        term={params.get('name') ?? undefined}
      />
      <CharacterList characters={props.characters.data} />
      <ReactPaginate
        disableInitialCallback={true}
        initialPage={state.page - 1}
        pageCount={props.characters.meta.last_page}
        marginPagesDisplayed={2}
        pageRangeDisplayed={1}
        onPageChange={onPageChange}
        nextClassName='paginationNext'
      />
    </React.Fragment>
  )
}

Characters.displayName = 'Characters'

Characters.layout = (page: JSX.Element): JSX.Element => {
  return <Layout>{page}</Layout>
}

export default Characters
