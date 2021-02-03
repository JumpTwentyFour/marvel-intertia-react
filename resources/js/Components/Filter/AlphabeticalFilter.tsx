import React from 'react'
import { AlphabetFilterProps } from '../../types/components/filter/AlphabetFilterProps'

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
