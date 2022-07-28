import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { CookieBanner } from '../components/CookieBanner/CookieBanner'

beforeEach(() => {
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: jest.fn(() => null),
      setItem: jest.fn(() => null)
    },
    writable: true
  })
  //   expect(window.localStorage.getItem).not.toHaveBeenCalledWith()
})

const dom = (
  <CookieBanner header='test header' buttonText='test button'>
    <p>test cookie body content</p>
  </CookieBanner>
)

it('Checks if the header renders', () => {
  expect(dom).toBeTruthy()
})

it('Renders the new header', () => {
  const { getByText } = render(dom)
  const header = getByText(/test header/i)
  expect(header).toBeTruthy()
})

it('Renders the new children', () => {
  const { getByText } = render(dom)
  const children = getByText(/test cookie body content/i)
  expect(children).toBeTruthy()
})
it('Renders the new button text', () => {
  const { getByText } = render(dom)
  const button = getByText(/test button/i)
  expect(button).toBeTruthy()
})

it('Clicks the button', () => {
  const { getByText } = render(dom)
  const button = getByText(/test button/i)
  expect(button).toBeTruthy()

  fireEvent.click(button)
  expect(window.localStorage.setItem).toHaveBeenCalledTimes(1)
  //   expect(window.localStorage.setItem).toHaveBeenCalledWith('cookie', 'accepted')
  expect(window.localStorage.getItem).toHaveBeenCalledWith('cookie')
})
