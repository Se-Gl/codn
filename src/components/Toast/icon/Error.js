import React from 'react'
import '../../../../dist/style/green.css'

function ErrorIcon({ width = '28', height = '28' }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 28 28'>
      <path
        fill='#FEDBDB'
        d='M27.27 13.5c0 7.456-6.044 13.5-13.5 13.5S.27 20.956.27 13.5 6.314 0 13.77 0s13.5 6.044 13.5 13.5z'></path>
      <path
        fill='#FEDBDB'
        d='M2 27.5c-.96 0-1.46-.46-1.055-1.383a.84.84 0 01.14-.214l4.03-4.586c-.422-.241-1.412-2.16 0 0l7.035 4.016c.795.454 2.514 1.47 1.62 1.667L2 27.5z'></path>
      <mask id='mask0_40_0' style={{ maskType: 'alpha' }} width='13' height='13' x='7' y='7' maskUnits='userSpaceOnUse'>
        <path
          fill='#F90606'
          fillRule='evenodd'
          d='M13.5 19.2a5.7 5.7 0 100-11.4 5.7 5.7 0 000 11.4zm-2.956-7.58a.76.76 0 111.075-1.076l1.881 1.881 1.881-1.88a.76.76 0 111.075 1.074L14.575 13.5l1.88 1.88a.76.76 0 11-1.074 1.076l-1.88-1.881-1.882 1.88a.76.76 0 11-1.075-1.074l1.881-1.881-1.88-1.88z'
          clipRule='evenodd'></path>
      </mask>
      <g mask='url(#mask0_40_0)'>
        <path fill='#F90606' d='M4 4H23V23H4z'></path>
      </g>
    </svg>
  )
}

export default ErrorIcon
