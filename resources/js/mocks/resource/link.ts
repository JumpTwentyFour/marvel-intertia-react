import * as Factory from 'factory.ts'
import faker from 'faker'
import { Link } from '../../types/resource/link'

export const LinkMock = Factory.Sync.makeFactory<Link>({
  active: faker.random.boolean(),
  label: faker.random.word(),
  url: faker.internet.url(),
})
