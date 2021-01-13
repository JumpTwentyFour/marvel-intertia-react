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
    setState({
      ...state,
      isSearchVisible: !state.isSearchVisible,
    })
  }

  return (
    <div className='search flex items-center'>
      <div
        className={`search__field absolute flex items-center left-0 -top-1 w-full overflow-hidden ${
          state.isSearchVisible ? 'z-1' : 'z-inset-1'
        }`}
      >
        <input
          className={`fade-up bg-transparent header-title text-3xl md:text-5xl font-semibold flex-grow text-white placeholder-white ${
            state.isSearchVisible ? 'fade-up--active' : ''
          }`}
          placeholder='Search...'
          value={state.term}
          aria-label='search-input'
          onKeyDown={handleEnter}
          onChange={handleChange}
        />
        <button
          aria-label='search-button'
          onClick={handleClick}
          className={`${state.isSearchVisible ? 'hidden' : 'flex'}`}
        >
          <SearchIcon className='fill-white w-10 h-10' />
        </button>
      </div>
      <span
        className={`search__trigger cursor-pointer ${
          state.isSearchVisible ? 'search__trigger--active' : ''
        }`}
        onClick={showSearch}
      >
        <SearchIcon className='fill-white w-10 h-10' />
      </span>
    </div>
  )
}

export default Search
