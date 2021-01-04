import React from 'react'
import { render } from '@testing-library/react'
import CharacterCard from '../../Components/CharacterCard'

describe('<CharacterCard />', () => {
  test('Should display All Character Elements', async () => {
    const { getByText } = render(
      <CharacterCard
        id={}
        name={}
        description={}
        thumbnail={}
        resourceURI={}
        comics={}
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
