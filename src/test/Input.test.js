import React, { useState } from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Input } from '../components/Input/Input'

function DomInput() {
  const [fullname, setFullname] = useState('')

  return (
    <>
      <Input maxLength={32} id='test' label='test' type='text' value={fullname} setValue={setFullname} htmlFor='test' />
    </>
  )
}

const inputSetup = () => {
  const utils = render(<DomInput />)
  const input = utils.getByLabelText('input-field')
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
  fireEvent.change(input, { target: { value: 'lorem ipsum input' } })
  expect(input.value).toBe('lorem ipsum input')
})
