export type ComicsType = {
  available: number
  collectionURI: string
  returned: number
  items: Array<Record<'resourceURI' | 'name', string>>
}
