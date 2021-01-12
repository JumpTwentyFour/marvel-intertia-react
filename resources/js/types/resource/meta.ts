import { Link } from './link'

export type Meta = {
  // eslint-disable-next-line camelcase
  current_page: number
  from: number
  // eslint-disable-next-line camelcase
  last_page: number
  links: Array<Link>
  path: string
  // eslint-disable-next-line camelcase
  per_page: number
  to: number
  total: number
}
