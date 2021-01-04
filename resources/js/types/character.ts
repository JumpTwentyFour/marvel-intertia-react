export type CharacterType = {
  id: number
  name: string
  description: string
  thumbnail: Record<'path' | 'extension', string>
  resourceURI?: string
  comics?: Array<string>
  series?: Array<string>
  stories?: Array<string>
  events?: Array<string>
  urls?: Array<string>
}
