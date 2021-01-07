import { SeriesSummary } from '../summary/SeriesSummary'

export type SeriesList = {
  available: number
  collectionURI: string
  returned: number
  items: Array<SeriesSummary>
}
