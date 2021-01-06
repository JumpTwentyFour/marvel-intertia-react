import * as Factory from 'factory.ts'
import faker from 'faker'
import { SeriesSummary } from '../summary/SeriesSummary'

export type SeriesList = {
  available: number
  collectionURI: string
  returned: number
  items: Array<SeriesSummary>
}

export const SeriesListTypeMock = Factory.Sync.makeFactory<SeriesList>({
  available: faker.random.number(1),
  collectionURI: faker.internet.url(),
  returned: faker.random.number(3),
  items: [],
})
