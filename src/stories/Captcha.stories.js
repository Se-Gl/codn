import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { Captcha } from '../components/Captcha'
import 'greencss/css/greencss.css'

const stories = storiesOf('Captcha Test', module)
stories.add('Captcha', () => {
  const [captcha, setCaptcha] = useState()
  //   console.log(captcha)
  return (
    <>
      <>
        <Captcha setWord={setCaptcha} />
      </>
    </>
  )
})
