import { useState, useEffect } from 'react'
import { themeChange } from 'theme-change'

// todo: import from daisy UI
const daisyUiThemes = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
] as const

function NavBar() {
  // https://steveholgado.com/typescript-types-from-arrays/
  const [defaultTheme] = useState<typeof daisyUiThemes[number]>(() => {
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    return mql.matches ? 'dark' : 'light'
  })
  useEffect(() => {
    // false parameter is required for react project
    themeChange(false)
  }, [])

  return (
    <div className="navbar bg-base-100">
      <a className="btn btn-ghost normal-case text-xl" href="/ppm">
        PPM
      </a>
      <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">
          <select
            data-choose-theme
            className="select select-sm select-accent w-full max-w-xs"
            defaultValue={defaultTheme}
          >
            {daisyUiThemes.map((theme) => (
              <option key={theme} value={theme}>
                {theme}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default NavBar
