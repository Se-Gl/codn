import React from 'react'
import userEvent from '@testing-library/user-event'
import { screen, render, fireEvent, queryByAttribute } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Accordion } from '../components/Accordion/Accordion'

it('Checks if the header renders', () => {
  const { getByText } = render(<Accordion expand='first title' collapse='first collapsed content' />)
  expect(getByText('first collapsed content')).toBeTruthy()
})

it('Renders the collapsed content on click', () => {
  const { getByText } = render(<Accordion expand='first title' collapse='first collapsed content' />)
  fireEvent.click(screen.getByText(/first title/i))
  expect(getByText('first collapsed content')).toBeTruthy()
})

it('accordion is being rendered by id and has focus', () => {
  const getById = queryByAttribute.bind(null, 'id')
  const dom = render(<Accordion expand='first title' collapse='first collapsed content' />)
  const table = getById(dom.container, 'accordion')

  expect(table).toBeTruthy()
  table.focus()
  expect(table).toHaveFocus()
})

it('accordion as focus on tab key press', () => {
  const getById = queryByAttribute.bind(null, 'id')
  const dom = render(<Accordion expand='first title' collapse='first collapsed content' />)
  const table = getById(dom.container, 'accordion')

  userEvent.tab()
  expect(table).toHaveFocus()
})
