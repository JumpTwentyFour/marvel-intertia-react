import { ComicType } from './comic'

export type ComicsProps = {
  comics: Record<'data', Array<ComicType>>
}
