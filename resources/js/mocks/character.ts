import * as Factory from 'factory.ts'
import faker from 'faker'
import { CharacterType } from '../types/character'

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
