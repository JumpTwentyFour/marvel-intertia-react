import * as Factory from 'factory.ts'
import faker from 'faker'
import { Meta } from '../../types/resource/meta'

export const metaMock = Factory.Sync.makeFactory<Meta>({
  current_page: faker.random.number(),
  from: faker.random.number(),
  last_page: faker.random.number(),
  links: [],
  path: faker.internet.url(),
  per_page: faker.random.number(),
  to: faker.random.number(),
  total: faker.random.number(),
})
