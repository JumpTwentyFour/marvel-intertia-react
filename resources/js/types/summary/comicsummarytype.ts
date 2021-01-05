import * as Factory from 'factory.ts'
import faker from 'faker'

export type ComicSummaryType = {
  resourceURI?: string
  name?: string
}

export const ComicSummaryTypeMock = Factory.Sync.makeFactory<ComicSummaryType>({
  name: faker.name.firstName(),
  resourceURI: faker.internet.url(),
})
