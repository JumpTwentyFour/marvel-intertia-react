import * as Factory from 'factory.ts'
import faker from 'faker'

export type EventSummaryType = {
  resourceURI?: string
  name?: string
}

export const EventSummaryTypeMock = Factory.Sync.makeFactory<EventSummaryType>({
  name: faker.name.firstName(),
  resourceURI: faker.internet.url(),
})
