import * as Factory from 'factory.ts'
import faker from 'faker'

export type StorySummary = {
  resourceURI?: string
  name?: string
}

export const StorySummaryTypeMock = Factory.Sync.makeFactory<StorySummary>({
  name: faker.name.firstName(),
  resourceURI: faker.internet.url(),
})
