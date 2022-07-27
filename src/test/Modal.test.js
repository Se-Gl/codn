import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { render, fireEvent } from '@testing-library/react'
import { Modal } from '../components/Modal'

const modalRoot = document.createElement('div')
modalRoot.setAttribute('id', 'modal-portal')
document.body.appendChild(modalRoot)

const TestModal = ({ header, footer, onClick }) => {
  const [toggleModal, setToggleModal] = useState(false)
  const el = document.createElement('div')

  useEffect(() => {
    modalRoot.appendChild(el)

    return () => modalRoot.removeChild(el)
  })

  return ReactDOM.createPortal(
    <>
      <button
        onClick={() => setToggleModal((prev) => !prev)}
        className='bg-red-9 px-20px py-10px rounded-10px hover:bg-red-7 relative z-1'>
        Show Modal
      </button>
      <Modal toggle={toggleModal} setToggle={setToggleModal}>
        <Modal.Header>test title</Modal.Header>
        <Modal.Body>now you see the modal content!</Modal.Body>
        <Modal.Footer>
          <button onClick={onClick}>Close Modal</button>
        </Modal.Footer>
      </Modal>
    </>,
    el
  )
}

test('show and hide modal on click', () => {
  const handleClose = jest.fn()
  const { getByText } = render(<TestModal onClick={handleClose}></TestModal>)

  fireEvent.click(getByText(/Show Modal/i))
  expect(getByText(/test title/i)).not.toBeNull()
  expect(getByText(/now you see the modal content!/i)).not.toBeNull()

  fireEvent.click(getByText(/Close Modal/i))
  expect(handleClose).toHaveBeenCalledTimes(1)
})

test('show and hide modal on keypress', () => {
  const { getByText } = render(<TestModal></TestModal>)
  fireEvent.click(getByText(/Show Modal/i))
  expect(getByText(/test title/i)).not.toBeNull()
  fireEvent.keyDown(getByText(/Show Modal/i), {
    key: 'Escape',
    code: 'Escape',
    keyCode: 27,
    charCode: 27
  })
})
