import * as Factory from 'factory.ts'
import faker from 'faker'
import { ComicsType } from './comics'

export type CharacterType = {
  id: number
  name: string
  description: string
  thumbnail: Record<'path' | 'extension', string>
  resourceURI?: string
  comics?: Array<ComicsType>
  series?: Array<string>
  stories?: Array<string>
  events?: Array<string>
  urls?: Array<string>
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
