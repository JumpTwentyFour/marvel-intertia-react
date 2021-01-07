import * as Factory from 'factory.ts'
import faker from 'faker'
import { EventSummary } from '../../types/summary/EventSummary'

export const EventSummaryTypeMock = Factory.Sync.makeFactory<EventSummary>({
  name: faker.name.firstName(),
  resourceURI: faker.internet.url(),
})
