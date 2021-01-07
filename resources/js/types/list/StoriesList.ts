import { StorySummary } from '../summary/StorySummary'

export type StoriesList = {
  available: number
  collectionURI: string
  returned: number
  items: Array<StorySummary>
}
