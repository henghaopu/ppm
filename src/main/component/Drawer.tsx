import React from 'react'
import { Link } from 'react-router-dom'
import * as prismThemes from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useTheme } from 'main/context/ThemeContext'
import { useFile } from 'main/context/FileContext'
import { RoutingPath } from 'main/AppRoutes'

// todo: support mobile
function Drawer() {
  const { codeTheme } = useTheme()
  const utilFileNames = useFile()
  return (
    <div className="bg-base-200">
      <ul className="menu p-4 overflow-y-auto w-80 text-base-content h-full">
        <li className="menu-title flex flex-row flex-nowrap items-center">
          <Link to={RoutingPath.ProgrammingNotes}>Programming Notes</Link>
          <select
            className="select select-bordered select-xs w-20 grow m-1"
            defaultValue={codeTheme.theme}
            onChange={(e) =>
              codeTheme.setTheme(e.target.value as keyof typeof prismThemes)
            }
          >
            {Object.keys(prismThemes).map((prismTheme) => (
              <option key={prismTheme} value={prismTheme}>
                {prismTheme}
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
