import React from 'react'
import { shallow } from 'enzyme'
import Home from '../../Pages/Home'

describe('<Home />', () => {
  test('Will render component', async () => {
    const wrapper = shallow(<Home characters={{ data: [] }} />)

    expect(wrapper.find('CharacterList')).toHaveLength(1)
  })
})
