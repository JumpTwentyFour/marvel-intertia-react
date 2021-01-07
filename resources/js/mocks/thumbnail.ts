import * as Factory from 'factory.ts'
import faker from 'faker'
import { Thumbnail } from '../types/thumbnail'

export const ThumbnailTypeMock = Factory.Sync.makeFactory<Thumbnail>({
  extension: faker.random.word(),
  path: faker.internet.url(),
})
