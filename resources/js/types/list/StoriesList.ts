import * as Factory from 'factory.ts'
import faker from 'faker'
import { StorySummary } from '../summary/StorySummary'

export type StoriesList = {
  available: number
  collectionURI: string
  returned: number
  items: Array<StorySummary>
}

export const StoriesListTypeMock = Factory.Sync.makeFactory<StoriesList>({
  available: faker.random.number(1),
  collectionURI: faker.internet.url(),
  returned: faker.random.number(1),
  items: [],
})
