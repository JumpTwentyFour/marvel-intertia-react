import React, { ReactElement, useState } from 'react'

type SearchType = {
  term?: string
  handleChange?: (term: string) => void
}

const Search = (props: SearchType): ReactElement => {
  const [state, setState] = useState({
    term: props.term,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      term: event.currentTarget.value,
    })
  }

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      if (props.handleChange) {
        props.handleChange(event.currentTarget.value)
      }
    }
  }

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    event.preventDefault()

    if (props.handleChange) {
      props.handleChange(state.term ?? '')
    }
  }

  return (
    <div className='col-span-8 col-start-5 content-center'>
      <input
        className='px-4 py-2 text-black placeholder-gray-700'
        placeholder='Search...'
        value={state.term}
        aria-label='search-input'
        onKeyDown={handleEnter}
        onChange={handleChange}
      />
      <button
        aria-label='search-button'
        className='bg-red-500 hover:bg-red-700 px-4 py-2 ml-8'
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  )
}

export default Search
