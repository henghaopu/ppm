import React from 'react'
import { render, screen } from '@testing-library/react'
import App from 'main/App'

test('renders learn react link', () => {
  render(<App />)
  const divElement = screen.getByTestId('app')
  expect(divElement).toBeInTheDocument()
})
