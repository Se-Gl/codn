import React from 'react'
import { storiesOf } from '@storybook/react'
import { Accordion } from '../components/Accordion'
import 'greencss/css/greencss.css'

const stories = storiesOf('Accordion Test', module)
stories.add('Accordion', () => {
  return (
    <div className='sans m-auto bg-gray-10 w-60rem rounded-20px shadow-small-gray-9'>
      <div className='w-50rem m-auto py-50px'>
        <Accordion
          className='bg-white rounded-5px'
          expand='first title'
          collapse='collapsed content'
          headerStyleExpanded='text-15px font-600 text-purple pb-10px'
          iconColorExpanded='stroke-purple'
        />
        <Accordion className='bg-white' expand='second title' collapse='second collapsed content' />
        <Accordion
          className='bg-white'
          key='asdfasdfasdfdsaf'
          expand='third title'
          collapse='third collapsed content'
          boxStyle={true}
          circle='bg-red-9 rotate-90deg'
        />
      </div>
    </div>
  )
})
