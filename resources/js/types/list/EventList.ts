import { EventSummary } from '../summary/EventSummary'

export type EventList = {
  available: number
  collectionURI: string
  returned: number
  items: Array<EventSummary>
}
