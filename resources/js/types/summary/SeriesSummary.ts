import * as Factory from 'factory.ts'
import faker from 'faker'

export type SeriesSummary = {
  resourceURI?: string
  name?: string
}

export const SeriesSummaryTypeMock = Factory.Sync.makeFactory<
  SeriesSummary
>({
  name: faker.name.firstName(),
  resourceURI: faker.internet.url(),
})
