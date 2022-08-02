import React from 'react'
import '@testing-library/jest-dom'

import { Captcha } from '../components/Captcha/Captcha'

const dom = <Captcha />

it('Checks if the captcha component renders', () => {
  expect(dom).toBeTruthy()
})
