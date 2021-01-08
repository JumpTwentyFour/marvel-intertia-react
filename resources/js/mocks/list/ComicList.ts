import * as Factory from 'factory.ts'
import faker from 'faker'
import { ComicList } from '../../types/list/ComicList'

export const ComicsListTypeMock = Factory.Sync.makeFactory<ComicList>({
  available: faker.random.number(1),
  collectionURI: faker.internet.url(),
  returned: faker.random.number(1),
  items: [],
})
