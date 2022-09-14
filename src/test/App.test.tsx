import React from 'react'
import App from 'main/App'
import { render, screen } from './customRender'

beforeEach(() => {
  // Mocking methods which are not implemented in JSDOM. Reference: https://stackoverflow.com/questions/39830580/jest-test-fails-typeerror-window-matchmedia-is-not-a-function
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  })
})

test('renders learn react link', () => {
  render(<App />)
  const divElement = screen.getByTestId('app')
  expect(divElement).toBeInTheDocument()
})
