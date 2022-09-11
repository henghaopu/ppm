// eslint-disable no-unstable-nested-components
import ReactMarkdown from 'react-markdown'
import raw from 'raw.macro'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import preval from 'preval.macro'
import NavBar from './component/NavBar'
import Drawer from './component/Drawer'

// get data(filenames) directly from a directory
const utilFileNames: string[] = preval`
  const fs = require('fs')
  const files = fs.readdirSync('src/main/util')
  module.exports = files
`

function App() {
  return (
    <div data-testid="app" className="h-screen w-screen flex flex-col">
      <NavBar />
      <div className="grow flex flex-row min-h-0">
        {/* todo: use context */}
        <Drawer utilFileNames={utilFileNames} />
        <div className="flex flex-row flex-nowrap overflow-y-hidden scroll-smooth">
          {utilFileNames.map((utilFileName) => (
            // documentation: https://github.com/remarkjs/react-markdown
            <ReactMarkdown
              key={utilFileName}
              // customize <pre> and <code> tags
              components={{
                pre: ({ children }) => (
                  // div helps pre to maintain the width
                  <div className="py-4 pl-4" id={utilFileName}>
                    <pre
                      style={{ width: '810px', height: '100%' }}
                      className="overflow-auto"
                    >
                      {children}
                    </pre>
                  </div>
                ),
                code: ({ inline, className, children, ...props }) => {
                  // className: set to language-js or so when using ```js
                  const match = /language-(\w+)/.exec(className || '')

                  return !inline && match ? (
                    <SyntaxHighlighter
                      {...props}
                      // typescript, jsx, ...
                      language={match[1]}
                      style={vscDarkPlus}
                      PreTag="div"
                      showLineNumbers
                      // two ways of overwriting default margin-y=0.5em
                      customStyle={{ margin: 0 }}
                      className="rounded-md"
                    >
                      {/* codeString */}
                      {String(children)}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                },
              }}
            >
              {/* children: string - markdown to parse */}
              {`~~~typescript\n${raw(`./util/${utilFileName}`)}\n~~~`}
            </ReactMarkdown>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
