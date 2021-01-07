import { ComicSummary } from '../summary/ComicSummary'

export type ComicList = {
  available: number
  collectionURI: string
  returned: number
  items: Array<ComicSummary>
}
