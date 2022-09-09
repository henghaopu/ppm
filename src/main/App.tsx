// eslint-disable no-unstable-nested-components
import React from 'react'
import ReactMarkdown from 'react-markdown'
import raw from 'raw.macro'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

function App() {
  return (
    <div data-testid="app">
      {/* documentation: https://github.com/remarkjs/react-markdown */}
      <ReactMarkdown
        // change things like <code> that come from markdown
        components={{
          pre: ({ children }) => <pre className="">{children}</pre>,
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
                // overwrite default margin-y=0.5em
                customStyle={{ margin: 0 }}
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
      </ReactMarkdown>
    </div>
  )
}

export default App
