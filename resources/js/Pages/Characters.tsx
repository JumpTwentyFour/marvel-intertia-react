import React, { FC, ReactElement } from 'react'
import Layout from '../Layout'

type CharactersProps = {
  characters: Array<Record<string, unknown>>
}

const Characters = (props: CharactersProps): JSX.Element => {
  return <h1>Here</h1>
}

Characters.displayName = 'Characters'

Characters.layout = (page: JSX.Element): JSX.Element => {
  return <Layout children={page.props.children} />
}

export default Characters
