import React from 'react'
import { render } from '@testing-library/react'
import ComicCard from '../../Components/ComicCard'

describe('<ComicCard />', () => {
  test('Should display All Comic Elements', async () => {
    const { getByText } = render(
      <ComicCard
        id={123}
        title='test comic title'
        description='test'
        thumbnail={{ path: 'test-path', extension: 'jpg' }}
      />,
    )
    const link = getByText(/test comic title/)
    expect(link).toBeInTheDocument()
  })
})
