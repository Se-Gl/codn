import React, { useState } from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Toast, handleShowToast } from '../components/Toast'

const TestToast = () => {
  const [toastList, setToastList] = useState([])

  return (
    <>
      <button onClick={() => handleShowToast('info', 'Success', 'You did it! codn toast works successfully!', setToastList)}>
        Show info
      </button>
      <button onClick={() => handleShowToast('warning', 'Warning', 'You did it! codn toast works successfully!', setToastList)}>
        Show warning
      </button>
      <button onClick={() => handleShowToast('success', 'Success', 'You did it! codn toast works successfully!', setToastList)}>
        Show success
      </button>
      <button onClick={() => handleShowToast('error', 'Error', 'You did it! codn toast works successfully!', setToastList)}>
        Show error
      </button>

      <Toast
        toastList={toastList}
        setToastList={setToastList}
        duration={1000}
        position='top-right'
        progressColor='from-blue to-magenta gradient-to-left'
      />
    </>
  )
}

const dom = <TestToast />

it('Checks if the toasts renders', () => {
  expect(dom).toBeTruthy()
})

it('Opens the toast on click', () => {
  const handleOpen = jest.fn()
  const { getByText } = render(<TestToast onClick={handleOpen} />)

  fireEvent.click(getByText(/Show info/i))
  fireEvent.click(getByText(/Show warning/i))
  fireEvent.click(getByText(/Show success/i))
  fireEvent.click(getByText(/Show error/i))
  expect(dom).toBeTruthy()
})

it('Closes the toast', () => {
  const handleOpen = jest.fn()
  const { getByText } = render(<TestToast onClick={handleOpen} />)

  fireEvent.click(getByText(/Show info/i))

  const utils = render(dom)
  const closeIcon = utils.getByLabelText('close-toast')

  fireEvent.click(closeIcon)
})
