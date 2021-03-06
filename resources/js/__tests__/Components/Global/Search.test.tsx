import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'

import Search from '../../../Components/Global/Search'

afterEach(cleanup)

describe('<Search />', () => {
  test('Will update state when search input is updated', async () => {
    const setState = jest.fn()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const useStateMock: any = (initState: any) => [initState, setState]
    jest.spyOn(React, 'useState').mockImplementation(useStateMock)

    const search = render(<Search />)
    fireEvent.change(search.getByLabelText('search-input'), {
      target: { value: 'Hulk' },
    })

    expect(setState).toHaveBeenCalledWith({
      term: 'Hulk',
      isSearchVisible: false,
    })
  })

  test('Will focus on search input when search is clicked', async () => {
    const { getByLabelText } = render(<Search />)
    fireEvent.click(getByLabelText('search-button'))
    const input = getByLabelText('search-input')
    expect(input).toBe(document.activeElement)
  })

  test('Will push search term up to handleChange consumer on submit of button', async () => {
    const handler = jest.fn((term: string) => {
      return term
    })

    const search = render(<Search handleChange={handler} term='' />)
    fireEvent.change(search.getByLabelText('search-input'), {
      target: { value: 'Hulk' },
    })

    fireEvent.click(search.getByLabelText('search-button'))

    expect(handler).toHaveBeenCalledWith('Hulk')
  })

  test('Will push search term up to handleChange consumer on enter key', async () => {
    const handler = jest.fn((term: string) => {
      return term
    })

    const search = render(<Search handleChange={handler} term='' />)
    fireEvent.change(search.getByLabelText('search-input'), {
      target: { value: 'Hulk' },
    })

    fireEvent.keyDown(search.getByLabelText('search-input'), {
      key: 'Enter',
      code: 'Enter',
    })

    expect(handler).toHaveBeenCalledWith('Hulk')
  })
})
