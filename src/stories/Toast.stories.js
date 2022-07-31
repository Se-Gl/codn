import React from 'react'
import { storiesOf } from '@storybook/react'
import { Toast } from '../components/Toast'
import 'greencss/css/greencss.css'

const stories = storiesOf('Toast Test', module)
stories.add('Toast', () => {
  return (
    <div className='sans m-auto bg-gray-10 w-100vw h-100vh' style={{ fontFamily: 'Inter' }}>
      <Toast
        timeout={10000}
        position='top-left'
        icon='success'
        iconClass='bg-blue-10'
        progressColor='from-blue-10 to-blue gradient-to-right'
        show={true}
        header='This is your toast 😅'
        text='This is a sample text. this is a sample text. this is a sample text. '
      />
      <Toast
        timeout={2000}
        position='top-left'
        icon='info'
        iconClass='bg-yellow-10'
        progressColor='from-yellow-10 to-yellow gradient-to-right'
        show={true}
        header='This is your toast 😅'
        text='This is a sample text. this is a sample text. this is a sample text. '
      />
    </div>
  )
})
