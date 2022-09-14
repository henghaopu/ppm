// eslint-disable no-unstable-nested-components
import ReactMarkdown from 'react-markdown'
import raw from 'raw.macro'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import * as prismThemes from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useTheme } from 'main/context/ThemeContext'
import { useFile } from 'main/context/FileContext'

function ProgrammingNotes() {
  const { codeTheme } = useTheme()
  const utilFileNames = useFile()

  return (
    <div className="h-full flex flex-row flex-nowrap scroll-smooth overflow-x-auto overflow-y-hidden">
      {utilFileNames.map((utilFileName) => (
        // documentation: https://github.com/remarkjs/react-markdown
        <ReactMarkdown
          key={utilFileName}
          // customize <pre> and <code> tags
          components={{
            pre: ({ children }) => (
              // div helps pre to maintain the width
              <div className="py-4 pl-4 h-full" id={utilFileName}>
                <pre
                  style={{ width: '810px' }}
                  className="overflow-y-auto h-full"
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
                  style={prismThemes[codeTheme.theme]}
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
          {`~~~typescript\n${raw(`../util/${utilFileName}`)}\n~~~`}
        </ReactMarkdown>
      ))}
    </div>
  )
}

export default ProgrammingNotes
