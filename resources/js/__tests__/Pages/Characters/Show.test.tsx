import React from 'react'
import { render } from '@testing-library/react'
import Show from '../../../Pages/Characters/Show'
import { characterTypeMock } from '../../../mocks/character'

describe('<View />', () => {
  test('Will render marvel link if link does exist', () => {
    const character = {
      ...characterTypeMock.build(),
      urls: [
        {
          url: 'http://marvel.com/comics/characters/1009220/captain_america',
          type: 'detail',
        },
        {
          url: 'http://marvel.com/universe/Captain_America_(Steve_Rogers)',
          type: 'wiki',
        },
        {
          url: 'http://marvel.com/comics/characters/1009220/captain_america',
          type: 'comicLink',
        },
      ],
    }
    const { getByText } = render(<Show character={character} />)
    const error = getByText('View Marvel Profile')
    expect(error).toBeInTheDocument()
  })

  test('Will not render marvel link if link does not exist', () => {
    const character = {
      ...characterTypeMock.build(),
      urls: [{ url: '', type: '' }],
    }
    const { queryByText } = render(<Show character={character} />)
    const error = queryByText('View Marvel Profile')
    expect(error).not.toBeInTheDocument()
  })
})
