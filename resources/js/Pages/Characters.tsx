import React, { FC, ReactElement } from 'react'

interface CharactersObject {
  characters: Array<Record<string, unknown>>
}

type CharactersProps = {
  characters: Array<Record<string, unknown>>
}

const Characters: FC<CharactersProps> = (
  characters: CharactersObject,
): ReactElement => {
  return <h1>Here are all the characters</h1>
}

export default Characters
