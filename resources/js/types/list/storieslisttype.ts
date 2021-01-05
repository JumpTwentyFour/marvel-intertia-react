import * as Factory from 'factory.ts'
import faker from 'faker'
import { StorySummaryType } from '../summary/storysummarytype'

export type StoriesListType = {
  available: number
  collectionURI: string
  returned: number
  items: Array<StorySummaryType>
}

export const StoriesListTypeMock = Factory.Sync.makeFactory<StoriesListType>({
  available: faker.random.number(1),
  collectionURI: faker.internet.url(),
  returned: faker.random.number(1),
  items: [],
})
