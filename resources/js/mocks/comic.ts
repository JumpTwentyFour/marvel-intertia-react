import * as Factory from 'factory.ts'
import faker from 'faker'
import { ComicType } from '../types/comic'

export const comicTypeMock = Factory.Sync.makeFactory<ComicType>({
  id: Factory.each(i => i),
  title: faker.name.firstName(),
  description: faker.random.words(),
  thumbnail: { path: '', extension: '' },
})
