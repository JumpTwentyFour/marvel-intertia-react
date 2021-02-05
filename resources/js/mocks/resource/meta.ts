import * as Factory from 'factory.ts'
import faker from 'faker'
import { Meta } from '../../types/resource/meta'

export const metaMock = Factory.Sync.makeFactory<Meta>({
  currentPage: faker.random.number(),
  from: faker.random.number(),
  lastPage: faker.random.number(),
  links: [],
  path: faker.internet.url(),
  perPage: faker.random.number(),
  to: faker.random.number(),
  total: faker.random.number(),
})
