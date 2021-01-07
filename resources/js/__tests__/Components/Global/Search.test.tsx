import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Search from '../../../Components/Global/Search'

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

    expect(setState).toHaveBeenCalledWith({ term: 'Hulk' })
  })
})
