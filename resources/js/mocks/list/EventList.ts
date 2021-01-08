import * as Factory from 'factory.ts'
import faker from 'faker'
import { EventList } from '../../types/list/EventList'

export const EventListTypeMock = Factory.Sync.makeFactory<EventList>({
  available: faker.random.number(1),
  collectionURI: faker.internet.url(),
  returned: faker.random.number(1),
  items: [],
})
