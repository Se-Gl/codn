import React, { useState } from 'react'

import { render, fireEvent, createEvent, userEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { TextArea } from '../components/Input/TextArea'

function DomInput() {
  const [fullname, setFullname] = useState('')

  return (
    <>
      <TextArea
        autofocus={true}
        type='text'
        id='fullname'
        label='Describe your story'
        value={fullname}
        setValue={setFullname}
        htmlFor='fullname'
      />
    </>
  )
}

const inputSetup = () => {
  const utils = render(<DomInput />)
  const input = utils.getByLabelText('textarea-field')
  return {
    input,
    ...utils
  }
}

it('Checks if the component renders', () => {
  const { input } = inputSetup()
  expect(input).toBeTruthy()
})

it('It changes the value of the input field when writing', () => {
  const { input } = inputSetup()
  fireEvent.change(input, {
    target: { innerHTML: 'New content text' }
  })
  expect(input.textContent).toBe('New content text')
})

// it('It restricts the use of keyDown if a maxLength is set', () => {
//   const { input } = inputSetup()
//   const pasted = jest.fn(() => null)

//   const paste = createEvent.paste(input, {
//     clipboardData: {
//       getData: () => 'testing'
//     }
//   })

//   fireEvent(input, paste)
//   expect(pasted).not.toHaveBeenCalled()
// })
