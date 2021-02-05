import React from 'react'
import faker from 'faker'
import { render } from '@testing-library/react'
import { shallow } from 'enzyme'
import Show from '../../../Pages/Characters/Show'
import { characterTypeMock } from '../../../mocks/character'
import { comicTypeMock } from '../../../mocks/comic'

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
    const { getByText } = render(
      <Show character={character} comics={{ data: [] }} />,
    )
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
    const { queryByText } = render(
      <Show character={character} comics={{ data: [] }} />,
    )
    const error = queryByText('View Marvel Profile')
    expect(error).not.toBeInTheDocument()
  })

  test('Will render comic title when comics exist', () => {
    const { getByText } = render(
      <Show
        character={characterTypeMock.build()}
        comics={{ data: comicTypeMock.buildList(4) }}
      />,
    )
    const comicTitleText = getByText('Comics')
    expect(comicTitleText).toBeInTheDocument()
  })

  test('Will render correct number of comic card components for each comic', () => {
    const count = faker.random.number(21)

    const wrapper = shallow(
      <Show
        character={characterTypeMock.build()}
        comics={{ data: comicTypeMock.buildList(count) }}
      />,
    )

    expect(wrapper.find('ComicCard')).toHaveLength(count)
  })

  test('Will not render comic title when comic does not exist', () => {
    const { queryByText } = render(
      <Show character={characterTypeMock.build()} comics={{ data: [] }} />,
    )
    const error = queryByText('Comics')
    expect(error).not.toBeInTheDocument()
  })
})
