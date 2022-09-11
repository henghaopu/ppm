import React from 'react'
import * as prismThemes from 'react-syntax-highlighter/dist/esm/styles/prism'

type DrawerProps = {
  utilFileNames: string[]
  defaultCodeTheme: string
  setCodeTheme: React.Dispatch<React.SetStateAction<string>>
}

// todo: support mobile
function Drawer({
  utilFileNames,
  defaultCodeTheme,
  setCodeTheme,
}: DrawerProps) {
  return (
    <div className="bg-base-200">
      <ul className="menu p-4 overflow-y-auto w-80 text-base-content h-full">
        <li className="menu-title flex flex-row flex-nowrap items-center">
          <span>Programming Notes</span>
          <select
            className="select select-bordered select-xs w-20 grow m-1"
            defaultValue={defaultCodeTheme}
            onChange={(e) => setCodeTheme(e.target.value)}
          >
            {Object.keys(prismThemes).map((codeTheme) => (
              <option key={codeTheme} value={codeTheme}>
                {codeTheme}
              </option>
            ))}
          </select>
        </li>
        {utilFileNames.map((fileName) => (
          <li key={fileName} className="hover-bordered">
            <a href={`#${fileName}`}>{fileName}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Drawer
