import React from 'react'
import { render } from '@testing-library/react'
import CharacterCard from '../../Components/CharacterCard'

describe('<CharacterCard />', () => {
  test('Should display All Character Elements', async () => {
    const { getByText } = render(
      <CharacterCard
        id={123}
        name='test name'
        description='test'
        thumbnail={{ path: '2213', extension: 'jpg' }}
      />,
    )
    const link = getByText(/test name/)
    expect(link).toBeInTheDocument()
  })
})
