import * as Factory from 'factory.ts'
import faker from 'faker'

export type EventSummary = {
  resourceURI?: string
  name?: string
}

export const EventSummaryTypeMock = Factory.Sync.makeFactory<EventSummary>({
  name: faker.name.firstName(),
  resourceURI: faker.internet.url(),
})
