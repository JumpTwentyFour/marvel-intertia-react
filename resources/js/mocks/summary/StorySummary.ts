import * as Factory from 'factory.ts'
import faker from 'faker'
import { StorySummary } from '../../types/summary/StorySummary'

export const StorySummaryTypeMock = Factory.Sync.makeFactory<StorySummary>({
  name: faker.name.firstName(),
  resourceURI: faker.internet.url(),
})
