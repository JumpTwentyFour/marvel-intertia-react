import React from 'react'
import Layout from '../../Layout'
import { CharacterType } from '../../types/character'
import { Url } from '../../types/url'

type ShowCharactersType = {
  character: CharacterType
}

const Show = ({ character }: ShowCharactersType): JSX.Element => {
  const characterImageUrl = `${character.thumbnail.path}.${character.thumbnail.extension}`
  const characterWikiUrl = ((): string => {
    if (!character.urls) {
      return ''
    }
    const detailUrl = character.urls
      .filter((url: Url): boolean => url.type === 'wiki')
      .pop()

    return detailUrl ? detailUrl.url : ''
  })()

  return (
    <React.Fragment>
      <div
        className='page-title col-span-6 md:col-span-12 relative
      border-b border-solid border-gray-200 border-opacity-10 pb-2.5
      mb-5 md:mb-8 xl:mb-10 flex items-center flex-row-reverse'
      >
        <header className='flex-grow mr-5 md:mr-8 xl:mr-10'>
          <h1
            data-cy='title'
            className='header-title text-3xl md:text-5xl font-semibold'
          >
            {character.name}
          </h1>
        </header>
      </div>
      <div className='flex flex-col col-span-6 sm:col-span-12 md:col-span-4'>
        <img
          data-cy='image'
          src={characterImageUrl}
          alt={character.name}
          className='object-cover'
        />
      </div>
      <div className='flex flex-col col-span-6 sm:col-span-12 md:col-span-8'>
        <p data-cy='description'>{character.description}</p>
        {characterWikiUrl.length > 0 && (
          <a
            data-cy='marvel-link'
            className='underline cursor-pointer py-2 w-max'
            href={characterWikiUrl}
            target='_blank'
            rel='noopener noreferrer'
          >
            View Marvel Profile
          </a>
        )}
      </div>
    </React.Fragment>
  )
}

Show.displayName = 'Characters'

Show.layout = (page: JSX.Element): JSX.Element => {
  return <Layout>{page}</Layout>
}

export default Show
