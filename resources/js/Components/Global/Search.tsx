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

    if (props.handleChange) {
      props.handleChange(event.currentTarget.value)
    }
  }

  return (
    <div>
      <input
        value={state.term}
        aria-label='search-input'
        onChange={handleChange}
      />
    </div>
  )
}

export default Search
