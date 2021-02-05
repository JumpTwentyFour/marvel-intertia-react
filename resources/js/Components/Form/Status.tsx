import React, { ReactElement } from 'react'

type StatusType = {
  value: string
}

const Status = (props: StatusType): ReactElement => {
  return (
    <div
      data-cy='status'
      className='px-6 py-4 border-0 rounded relative mb-4 bg-green-600'
    >
      <span className='inline-block align-middle mr-8'>{props.value}</span>
    </div>
  )
}

export default Status
