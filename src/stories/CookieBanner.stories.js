import React from 'react'
import { storiesOf } from '@storybook/react'
import { CookieBanner } from '../components/CookieBanner'
import 'greencss/css/greencss.css'

const stories = storiesOf('CookieBanner Test', module)
stories.add('CookieBanner', () => {
  return (
    <div className='sans m-auto bg-gray-10 w-60rem rounded-20px shadow-small-gray-9' style={{ fontFamily: 'Inter' }}>
      <>
        <CookieBanner />
      </>
    </div>
  )
})
