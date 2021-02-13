import React from 'react'

type AlphabetFilterProps = {
  children: React.ReactNode
}

const AlphabeticalFilter: React.FC<AlphabetFilterProps> = ({ children }) => {
  return (
    <React.Fragment>
      <div className='col-span-6 md:col-span-12 inline-flex justify-between'>
        {children}
      </div>
    </React.Fragment>
  )
}

export default AlphabeticalFilter
