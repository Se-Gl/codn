import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Toast } from '../components/Toast'

const dom = <Toast show={true} header='This is a custom toast header' timeout={1000} />
const domInfo = <Toast show={true} header='This is a custom info toast header' position='top-right' icon='info' timeout={1000} />
const domError = <Toast show={true} header='This is a custom error toast header' icon='error' timeout={1000} />

it('Checks if the toasts renders', () => {
  expect(dom).toBeTruthy()
  expect(domInfo).toBeTruthy()
  expect(domError).toBeTruthy()
})

it('Renders the new header', () => {
  const { getByText } = render(dom)
  const header = getByText(/this is a custom toast header/i)
  expect(header).toBeTruthy()
})

it('Renders the info header', () => {
  const { getByText } = render(domInfo)

  const infoHeader = getByText(/this is a custom info toast header/i)
  expect(infoHeader).toBeTruthy()
})
it('Renders the error header', () => {
  const { getByText } = render(domError)

  const errorHeader = getByText(/This is a custom error toast header/i)
  expect(errorHeader).toBeTruthy()
})

it('Closes the toast', () => {
  const utils = render(dom)
  const closeIcon = utils.getByLabelText('close-toast')

  expect(closeIcon).toBeTruthy()

  fireEvent.click(closeIcon)

  const { container } = render(dom)
  expect(container).not.toHaveClass('opacity-100per')
  expect(container).not.toHaveClass('display-block')
})

jest.setTimeout(1001)

it('Does not show the toast after 1001ms', () => {
  const { utils } = render(dom)

  expect(utils).not.toBeTruthy()
  expect(utils).not.toBeDefined()
})
