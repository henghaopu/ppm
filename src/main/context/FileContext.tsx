import React, { createContext, useContext } from 'react'
import preval from 'preval.macro'

// get data(filenames) directly from a directory
const utilFileNames: string[] = preval`
  const fs = require('fs')
  const files = fs.readdirSync('src/main/util')
  module.exports = files
`
// todo: refactor - provide a default value
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const FileContext = createContext<string[]>()

function FileProvider({ children }: { children: React.ReactNode }) {
  return (
    <FileContext.Provider value={utilFileNames}>
      {children}
    </FileContext.Provider>
  )
}

function useFile() {
  const value = useContext(FileContext)
  if (value === undefined) {
    throw new Error('useFile must be used within a FileProvider')
  }

  return value
}

export { FileProvider, useFile }
