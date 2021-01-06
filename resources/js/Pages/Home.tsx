import React from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'
import Layout from '../Layout'
import { CharacterType } from '../types/character'
import CharacterList from '../Components/CharacterList'

type CharactersProps = {
  characters: Record<'data', Array<CharacterType>>
}

const Home = (props: CharactersProps): JSX.Element => {
  return <CharacterList characters={props.characters.data} />
}

Home.displayName = 'Home'

Home.layout = (page: JSX.Element): JSX.Element => {
  return (
    <Layout>
      <header className='col-span-12 border-b border-solid border-gray-200 border-opacity-10 pb-2.5 mb-10 flex items-center'>
        <h1 className='text-5xl font-semibold flex-grow'>
          Featured Characters
        </h1>
        <InertiaLink href='/characters' className='header-link'>
          View all characters
        </InertiaLink>
      </header>
      {page}
    </Layout>
  )
}

export default Home
