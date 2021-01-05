import * as Factory from 'factory.ts'
import faker from 'faker'
import { EventSummaryType } from '../summary/eventsummarytype'

export type EventListType = {
  available: number
  collectionURI: string
  returned: number
  items: Array<EventSummaryType>
}

export const EventListTypeMock = Factory.Sync.makeFactory<EventListType>({
  available: faker.random.number(1),
  collectionURI: faker.internet.url(),
  returned: faker.random.number(1),
  items: [],
})
