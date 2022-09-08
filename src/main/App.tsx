// eslint-disable no-unstable-nested-components
import React from 'react'
import ReactMarkdown from 'react-markdown'
import raw from 'raw.macro'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

// import MinHeightDemo from './screen/MinHeightDemo'

function App() {
  return (
    <div data-testid="app">
      {/* <MinHeightDemo /> */}
      <div style={{ height: '100vh', overflow: 'auto' }}>
        {/* documentation: https://github.com/remarkjs/react-markdown */}
        <ReactMarkdown
          // change things like <code> that come from markdown
          components={{
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
          {`~~~typescript\n${raw('./util/permute.ts')}\n~~~`}

          {/* test another files */}
          {/* {`~~~jsx\n${raw('./App.tsx')}\n~~~`} */}
          {/* {`~~~typescript\n${raw('../test/util/permute.test.ts')}\n~~~`} */}

          {/* maintain a .md file - against Single Source of Truth */}
          {/* {raw('./markdown/permute.md')} */}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default App
