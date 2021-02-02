import React from 'react'

export type AlphabetFilterProps = {
  characters: Array<string>
  buttonAction: (character: string) => void
  children: React.ReactNode
}
