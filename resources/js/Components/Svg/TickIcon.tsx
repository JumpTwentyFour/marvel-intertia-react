import React, { ReactElement } from 'react'
import { SVGType } from '../../types/svgs'

const TickIcon = (props: SVGType): ReactElement => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' {...props} viewBox='0 0 26 22'>
      <path d='M3.37,11A2,2,0,0,0,.63,14l8,7.5a2,2,0,0,0,2.95-.23l14-18A2,2,0,0,0,22.42.77L9.77,17Z' />
    </svg>
  )
}

export default TickIcon
