// eslint-disable no-unstable-nested-components
import React from 'react'
import ReactMarkdown from 'react-markdown'
import raw from 'raw.macro'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

// todo: get data(filenames) directly from a file
const utilFileNames = [
  'areAnagrams.ts',
  'areIsomorphic.ts',
  'binarySearch.ts',
  'binaryTreeLevelOrder.ts',
  'codePointAtInUPlusNotation.ts',
  'combine.ts',
  'fibonacci.ts',
  'frequencySort.ts',
  'getRandomInt.ts',
  'hasCycle.ts',
  'heap.ts',
  'isPalindrome.ts',
  'longestPalindrome.ts',
  'mergeSortedLinkedLists.ts',
  'middleNode.ts',
  'permute.ts',
  'pivotIndex.ts',
  'postorder.ts',
  'preorder.ts',
  'queue.ts',
  'removeElement.ts',
  'reverseLinkedList.ts',
  'rotate.ts',
  'runningSum.ts',
  'shuffle.ts',
]

function App() {
  return (
    <div
      data-testid="app"
      className="h-screen w-screen flex flex-row flex-nowrap"
    >
      {utilFileNames.map((utilFileName) => (
        // documentation: https://github.com/remarkjs/react-markdown
        <ReactMarkdown
          key={utilFileName}
          // customize <pre> and <code> tags
          components={{
            pre: ({ children }) => (
              // div helps pre to maintain the width
              <div className="py-4 pl-4 bg-slate-200">
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
  )
}

export default App
