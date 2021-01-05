import * as Factory from 'factory.ts'
import faker from 'faker'
import { ComicsListType } from './list/comicslisttype'
import { SeriesListType } from './list/serieslisttype'
import { StoriesListType } from './list/storieslisttype'
import { EventListType } from './list/eventlisttype'
import { UrlType } from './urltype'

export type CharacterType = {
  id: number
  name: string
  description: string
  thumbnail: Record<'path' | 'extension', string>
  resourceURI?: string
  comics?: Array<ComicsListType>
  series?: Array<SeriesListType>
  stories?: Array<StoriesListType>
  events?: Array<EventListType>
  urls?: Array<UrlType>
}

export const characterTypeMock = Factory.Sync.makeFactory<CharacterType>({
  id: Factory.each(i => i),
  name: faker.name.firstName(),
  description: faker.random.words(),
  thumbnail: { path: '', extension: '' },
  resourceURI: faker.internet.url(),
  comics: [],
  series: [],
  stories: [],
  events: [],
  urls: [],
})
