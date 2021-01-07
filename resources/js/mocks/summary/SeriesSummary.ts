import * as Factory from 'factory.ts'
import faker from 'faker'
import { SeriesSummary } from '../../types/summary/SeriesSummary'

export const SeriesSummaryTypeMock = Factory.Sync.makeFactory<SeriesSummary>({
  name: faker.name.firstName(),
  resourceURI: faker.internet.url(),
})
