import * as Factory from 'factory.ts'
import faker from 'faker'

export type UrlType = {
  type: string
  url: string
}

export const UrlTypeMock = Factory.Sync.makeFactory<UrlType>({
  type: faker.random.word(),
  url: faker.internet.url(),
})
