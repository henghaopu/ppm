import React, { createContext, useState, useMemo, useContext } from 'react'
import * as prismThemes from 'react-syntax-highlighter/dist/esm/styles/prism'

type ThemeValue = {
  appTheme: string
  codeTheme: {
    theme: keyof typeof prismThemes
    setTheme: React.Dispatch<React.SetStateAction<keyof typeof prismThemes>>
  }
}

type ThemeProviderProps = {
  children: React.ReactNode
}

// todo: refactor - provide a default value
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const ThemeContext = createContext<ThemeValue>()

function ThemeProvider({ children }: ThemeProviderProps) {
  // reference: https://bobbyhadz.com/blog/typescript-element-implicitly-has-any-type-expression#:~:text=The%20error%20%22Element%20implicitly%20has,one%20of%20the%20object's%20keys.
  const [codeTheme, setCodeTheme] = useState<keyof typeof prismThemes>(() => {
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    return mql.matches ? 'vscDarkPlus' : 'materialOceanic'
  })

  const value: ThemeValue = useMemo(
    () => ({
      // todo: refactor appTheme
      appTheme: 'dark',
      codeTheme: {
        theme: codeTheme,
        setTheme: setCodeTheme,
      },
    }),
    [codeTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

function useTheme() {
  const value = useContext(ThemeContext)
  if (value === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return value
}

export { ThemeProvider, useTheme }
