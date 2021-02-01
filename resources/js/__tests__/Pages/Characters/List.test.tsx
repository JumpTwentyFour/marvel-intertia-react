import React from 'react'
import { shallow } from 'enzyme'
import { render, fireEvent } from '@testing-library/react'
import List from '../../../Pages/Characters/List'
import { metaMock } from '../../../mocks/resource/meta'

describe('<Characters />', () => {
  test('Will render component', async () => {
    const wrapper = shallow(
      <List characters={{ data: [], meta: metaMock.build() }} />,
    )

    expect(wrapper.find('CharacterList')).toHaveLength(1)
  })

  test('Will update state on change of pagination', async () => {
    const setState = jest.fn()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const useStateMock: any = (initState: any) => [initState, setState]
    jest.spyOn(React, 'useState').mockImplementation(useStateMock)

    const search = render(
      <List characters={{ data: [], meta: metaMock.build() }} />,
    )
    fireEvent.click(search.getByLabelText('Next page'))

    expect(setState).toHaveBeenCalledWith({ name: '', page: 2 })
  })

  test('Will update state on search', async () => {
    const setState = jest.fn()
    jest.spyOn(URLSearchParams.prototype, 'get').mockReturnValue('Iron Man')

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const useStateMock: any = (initState: any) => [initState, setState]
    jest.spyOn(React, 'useState').mockImplementation(useStateMock)

    const search = render(
      <List characters={{ data: [], meta: metaMock.build() }} />,
    )
    fireEvent.click(search.getByLabelText('search-button'))

    expect(setState).toHaveBeenCalledWith({ name: 'Iron Man', page: 1 })
  })
})
