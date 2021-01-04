import React from 'react'
import { render } from '@testing-library/react'
import CharacterCard from '../../Components/CharacterCard'

describe('<CharacterCard />', () => {
  test('Should display All Character Elements', async () => {
    const { getByText } = render(
      <CharacterCard
        id={123}
        name='test'
        description='test'
        thumbnail={{ path: '2213', extension: 'jpg' }}
        resourceURI={['asd']}
        comics={[]}
        series={}
        stories={}
        events={}
        urls={}
      />,
    )
    const link = getByText(/Assemble/)

    expect(link).toBeInTheDocument()
  })
})
