import * as Factory from 'factory.ts'
import faker from 'faker'
import { Url } from '../types/url'

export const UrlTypeMock = Factory.Sync.makeFactory<Url>({
  type: faker.random.word(),
  url: faker.internet.url(),
})
