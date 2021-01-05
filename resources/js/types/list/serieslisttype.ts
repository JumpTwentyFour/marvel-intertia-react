import * as Factory from 'factory.ts'
import faker from 'faker'

export type SeriesListType = {
  available: number
  collectionURI: string
  returned: number
  items: Array<Record<'resourceURI' | 'name', string>>
}

export const SeriesListTypeMock = Factory.Sync.makeFactory<SeriesListType>({
  available: faker.random.number(1),
  collectionURI: faker.internet.url(),
  returned: faker.random.number(3),
  items: [],
})
