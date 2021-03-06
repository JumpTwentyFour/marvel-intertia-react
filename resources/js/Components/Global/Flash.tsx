import React, { ReactElement } from 'react'

type FlashProps = {
  type: string
  children: React.ReactNode
}

const Flash = (props: FlashProps): ReactElement => {
  const { type, children } = props
  const backgroundColour: { [index: string]: string } = {
    success: 'bg-green-600',
    warning: 'bg-amber-600',
    error: 'bg-red-600',
  }

  return (
    <div
      className={`px-6 py-4 border-0 rounded relative mb-4 ${backgroundColour[type]}`}
    >
      <span className='inline-block align-middle mr-8'>{children}</span>
    </div>
  )
}

export default Flash
