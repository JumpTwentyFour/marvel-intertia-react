import React from 'react'
import { shallow } from 'enzyme'
import Comics from '../../Pages/Comics'

describe('<Comics />', () => {
  test('Will render component', async () => {
    const wrapper = shallow(<Comics comics={{ data: [] }} />)

    expect(wrapper.find('ComicList')).toHaveLength(1)
  })
})
