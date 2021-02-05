import { Link } from './link'

export type Meta = {
  currentPage: number
  from: number
  lastPage: number
  links: Array<Link>
  path: string
  perPage: number
  to: number
  total: number
}
