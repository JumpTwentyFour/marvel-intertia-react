import * as Factory from 'factory.ts'
import faker from 'faker'
import { EventSummary } from '../summary/EventSummary'

export type EventList = {
  available: number
  collectionURI: string
  returned: number
  items: Array<EventSummary>
}

export const EventListTypeMock = Factory.Sync.makeFactory<EventList>({
  available: faker.random.number(1),
  collectionURI: faker.internet.url(),
  returned: faker.random.number(1),
  items: [],
})
