import * as Factory from 'factory.ts'
import faker from 'faker'
import { ComicSummary } from '../summary/ComicSummary'

export type ComicList = {
  available: number
  collectionURI: string
  returned: number
  items: Array<ComicSummary>
}

export const ComicsListTypeMock = Factory.Sync.makeFactory<ComicList>({
  available: faker.random.number(1),
  collectionURI: faker.internet.url(),
  returned: faker.random.number(1),
  items: [],
})
