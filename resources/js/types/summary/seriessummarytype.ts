import * as Factory from 'factory.ts'
import faker from 'faker'

export type SeriesSummaryType = {
  resourceURI?: string
  name?: string
}

export const SeriesSummaryTypeMock = Factory.Sync.makeFactory<
  SeriesSummaryType
>({
  name: faker.name.firstName(),
  resourceURI: faker.internet.url(),
})
