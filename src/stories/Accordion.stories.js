import React from 'react'
import { storiesOf } from '@storybook/react'
import { Accordion } from '../components/Accordion'
import 'greencss/css/greencss.css'

const stories = storiesOf('Accordion Test', module)
stories.add('Accordion', () => {
  return (
    <div className='sans m-auto bg-gray-10 w-60rem rounded-20px shadow-small-gray-9'>
      <div className='w-50rem m-auto py-50px'>
        <Accordion className='bg-white' key='asdfasdfasdf' expand='first title' collapse='collapsed content' />
        <Accordion className='bg-white' key='asdfasdfasdf' expand='second title' collapse='second collapsed content' />
        <Accordion
          className='bg-blue-9'
          key='asdfasdfasdfdsaf'
          expand='third title'
          collapse='third collapsed content'
          boxStyle={true}
          defaultStyle={false}
        />
      </div>
    </div>
  )
})
