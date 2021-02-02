import React from 'react'
import { render } from '@testing-library/react'
import Show from '../../../Pages/Characters/Show'
import { characterTypeMock } from '../../../mocks/character'

describe('<View />', () => {
  test('Will render marvel wiki link if link does exist', () => {
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
    const profileLinkText = getByText('View Marvel Profile')

    expect(profileLinkText).toBeInTheDocument()
    expect(profileLinkText.closest('a')).toHaveAttribute(
      'href',
      'http://marvel.com/universe/Captain_America_(Steve_Rogers)',
    )
  })

  test('Will not render marvel link if wiki link does not exist', () => {
    const character = {
      ...characterTypeMock.build(),
      urls: [
        {
          url: 'http://marvel.com/comics/characters/1009220/captain_america',
          type: 'detail',
        },
        {
          url: 'http://marvel.com/comics/characters/1009220/captain_america',
          type: 'comicLink',
        },
      ],
    }
    const { queryByText } = render(<Show character={character} />)
    const error = queryByText('View Marvel Profile')
    expect(error).not.toBeInTheDocument()
  })
})
