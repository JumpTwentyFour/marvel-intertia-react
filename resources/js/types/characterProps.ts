import { CharacterType } from './character'
import { Meta } from './resource/meta'

export type CharactersProps = {
  characters: {
    data: Array<CharacterType>
    meta: Meta
  }
}
