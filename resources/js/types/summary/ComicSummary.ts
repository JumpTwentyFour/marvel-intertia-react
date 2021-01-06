import * as Factory from 'factory.ts'
import faker from 'faker'

export type ComicSummary = {
  resourceURI?: string
  name?: string
}

export const ComicSummaryTypeMock = Factory.Sync.makeFactory<ComicSummary>({
  name: faker.name.firstName(),
  resourceURI: faker.internet.url(),
})
