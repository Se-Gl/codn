import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { TextArea } from '../components/Input'
import 'greencss/css/greencss.css'

const stories = storiesOf('TextArea Test', module)

export const StoryTextArea = stories.add('TextArea', () => {
  const [fullname, setFullname] = useState('')
  return (
    <div className='sans my-50px'>
      <TextArea
        autofocus={true}
        type='text'
        maxLength={32}
        id='fullname'
        label='Describe your story'
        value={fullname}
        setValue={setFullname}
        htmlFor='fullname'
      />
    </div>
  )
})
