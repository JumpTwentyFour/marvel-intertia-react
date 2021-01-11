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
      <Search
        handleChange={handleChange}
        term={params.get('name') ?? undefined}
      />
      <CharacterList characters={props.characters.data} />
    </React.Fragment>
  )
}

Characters.displayName = 'Characters'

Characters.layout = (page: JSX.Element): JSX.Element => {
  return <Layout>{page}</Layout>
}

export default Characters
