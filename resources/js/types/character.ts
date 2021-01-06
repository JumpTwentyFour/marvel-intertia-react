import { ComicType } from './comic'
import { Thumbnail } from './thumbnail'

export type CharacterType = {
  id: number
  name: string
  description: string
  thumbnail: Thumbnail
  resourceURI?: string
  comics?: Array<ComicType>
  series?: Array<string>
  stories?: Array<string>
  events?: Array<string>
  urls?: Array<string>
}
