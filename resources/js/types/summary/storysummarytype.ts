import * as Factory from 'factory.ts'
import faker from 'faker'

export type StorySummaryType = {
  resourceURI?: string
  name?: string
}

export const StorySummaryTypeMock = Factory.Sync.makeFactory<StorySummaryType>({
  name: faker.name.firstName(),
  resourceURI: faker.internet.url(),
})
