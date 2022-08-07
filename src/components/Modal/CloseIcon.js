import React from 'react'
import '../../../dist/style/green.css'

function CloseIcon({ width = '20', height = '20', iconColor = 'fill-gray' }) {
  return (
    <svg
      className='cursor-pointer'
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 20 20'>
      <path
        className={iconColor}
        d='M5.187 4.01A.833.833 0 004.01 5.187L8.822 10l-4.814 4.813a.835.835 0 101.179 1.178L10 11.178l4.813 4.813a.833.833 0 001.178-1.178L11.178 10l4.813-4.812a.833.833 0 00-1.178-1.179L10 8.822 5.187 4.008v.001z'></path>
    </svg>
  )
}

export default CloseIcon
