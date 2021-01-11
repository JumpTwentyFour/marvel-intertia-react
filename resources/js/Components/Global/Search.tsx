import React, { ReactElement, useState } from 'react'
import SearchIcon from '../Svgs/SearchIcon'

type SearchType = {
  term?: string
  isSearchVisible?: boolean
  handleChange?: (term: string) => void
}

const Search = (props: SearchType): ReactElement => {
  const [state, setState] = useState({
    term: props.term,
    isSearchVisible: false,
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

  const showSearch = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault()
    setState(prevState => ({
      ...state,
      isSearchVisible: !prevState.isSearchVisible,
    }))
  }

  return (
    <div className='search flex items-center'>
      <div className={`field absolute flex items-center right-0 top-1 w-0 overflow-hidden ${isSearchVisible ? '' : 'hidden'}`}>
        <input
          className='px-4 py-2 text-black placeholder-gray-700'
          placeholder='Search...'
          value={state.term}
          aria-label='search-input'
          onKeyDown={handleEnter}
          onChange={handleChange}
        />
        <button aria-label='search-button' onClick={handleClick}>
          <SearchIcon className='fill-white w-10 h-10' />
        </button>
      </div>
      <span className='search__trigger cursor-pointer' onClick={showSearch}>
        <SearchIcon className='fill-white w-10 h-10' />
      </span>
    </div>
  )
}

export default Search
