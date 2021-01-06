import { ComicList } from './list/ComicList'
import { SeriesList } from './list/SeriesList'
import { StoriesList } from './list/StoriesList'
import { EventList } from './list/EventList'
import { UrlType } from './urltype'
import { Thumbnail } from './thumbnail'

export type CharacterType = {
  id: number
  name: string
  description: string
  thumbnail: Thumbnail
  resourceURI?: string
  comics?: Array<ComicList>
  series?: Array<SeriesList>
  stories?: Array<StoriesList>
  events?: Array<EventList>
  urls?: Array<UrlType>
}
