import * as Factory from 'factory.ts'
import faker from 'faker'
import { ComicSummaryType } from '../summary/comicsummarytype'

export type ComicsListType = {
  available: number
  collectionURI: string
  returned: number
  items: Array<ComicSummaryType>
}

export const ComicsListTypeMock = Factory.Sync.makeFactory<ComicsListType>({
  available: faker.random.number(1),
  collectionURI: faker.internet.url(),
  returned: faker.random.number(1),
  items: [],
})
