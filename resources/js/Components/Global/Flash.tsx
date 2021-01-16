import React, { ReactElement } from 'react'

const Flash = ({ children }: { children: React.ReactNode }): ReactElement => {
  return <div className='flash'>{children}</div>
}

export default Flash
