import React from 'react'
import { render } from '@testing-library/react'
import { shallow } from 'enzyme'
import ComicList from '../../Components/ComicList'
import { comicTypeMock } from '../../mocks/comic'

describe('<ComicList />', () => {
  test('Will display no comics found when no comics are returned', async () => {
    const { getByText } = render(<ComicList comics={[]} />)

    const message = getByText(/No Comics Found/)

    expect(message).toBeInTheDocument()
  })

  test('Will not render comic card component when no comics exist in the list', async () => {
    const wrapper = shallow(<ComicList comics={[]} />)
    expect(wrapper.find('ComicCard')).toHaveLength(0)
  })

  test('Will render comic card component when comics exist in the list', async () => {
    const wrapper = shallow(<ComicList comics={[comicTypeMock.build()]} />)
    expect(wrapper.find('ComicCard')).toHaveLength(1)
  })
})
