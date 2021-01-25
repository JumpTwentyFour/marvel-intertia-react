import React, { ReactElement } from 'react'
import { SVGType } from '../../types/svgs'

const SearchIcon = (props: SVGType): ReactElement => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      viewBox='0 0 28.02 28.02'
    >
      <path d='M27.72,26.26l-6.5-6.5h-.07a12,12,0,1,0-1.39,1.39v.07l6.5,6.5a1,1,0,0,0,1.42,0h0a1,1,0,0,0,.09-1.41ZM12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Z' />
    </svg>
  )
}

export default SearchIcon
