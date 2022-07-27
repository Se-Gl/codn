import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { Input } from '../components/Input'
import 'greencss/css/greencss.css'

const stories = storiesOf('Input Test', module)

export const StoryModal = stories.add('Input', () => {
  const [fullname, setFullname] = useState('')
  return (
    <div className='sans my-50px'>
      <Input
        maxLength={32}
        id='fullname'
        label='Full name'
        type='text'
        value={fullname}
        setValue={setFullname}
        htmlFor='fullname'
      />
    </div>
  )
})
