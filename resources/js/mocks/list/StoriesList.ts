import * as Factory from 'factory.ts'
import faker from 'faker'
import { StoriesList } from '../../types/list/StoriesList'

export const StoriesListTypeMock = Factory.Sync.makeFactory<StoriesList>({
  available: faker.random.number(1),
  collectionURI: faker.internet.url(),
  returned: faker.random.number(1),
  items: [],
})
