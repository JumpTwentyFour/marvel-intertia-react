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
    <div>
      <input
        placeholder='Search...'
        value={state.term}
        aria-label='search-input'
        onKeyDown={handleEnter}
        onChange={handleChange}
      />
      <button aria-label='search-button' onClick={handleClick}>
        Search
      </button>
    </div>
  )
}

export default Search
