import * as Factory from 'factory.ts'
import faker from 'faker'
import { SeriesList } from '../../types/list/SeriesList'

export const SeriesListTypeMock = Factory.Sync.makeFactory<SeriesList>({
  available: faker.random.number(1),
  collectionURI: faker.internet.url(),
  returned: faker.random.number(3),
  items: [],
})
