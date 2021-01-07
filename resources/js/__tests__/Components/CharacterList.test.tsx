import React from 'react'
import { render } from '@testing-library/react'
import { shallow } from 'enzyme'
import CharacterList from '../../Components/CharacterList'
import { characterTypeMock } from '../../mocks/character'

describe('<CharacterList />', () => {
  test('Will display no characters found when no characters are returned', async () => {
    const { getByText } = render(<CharacterList characters={[]} />)

    const message = getByText(/No Characters Found/)

    expect(message).toBeInTheDocument()
  })

  test('Will not render character card component when no characters exist in the list', async () => {
    const wrapper = shallow(<CharacterList characters={[]} />)
    expect(wrapper.find('CharacterCard')).toHaveLength(0)
  })

  test('Will render character card component when characters exist in the list', async () => {
    const wrapper = shallow(
      <CharacterList characters={[characterTypeMock.build()]} />,
    )
    expect(wrapper.find('CharacterCard')).toHaveLength(1)
  })
})
