import React, { FC, ReactElement, useState } from 'react'

const Search: FC = (): ReactElement => {
  const [state, setState] = useState({
    term: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      term: event.currentTarget.value,
    })
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
