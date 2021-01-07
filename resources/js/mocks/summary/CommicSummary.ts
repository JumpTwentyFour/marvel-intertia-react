import * as Factory from 'factory.ts'
import faker from 'faker'
import { ComicSummary } from '../../types/summary/ComicSummary'

export const ComicSummaryTypeMock = Factory.Sync.makeFactory<ComicSummary>({
  name: faker.name.firstName(),
  resourceURI: faker.internet.url(),
})
