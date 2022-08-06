import React from 'react'
import '../../../../dist/style/green.css'

function SuccessIcon({ width = '50', height = '50' }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 28 28'>
      <path
        fill='#edfedb'
        d='M27.27 13.5c0 7.456-6.044 13.5-13.5 13.5S.27 20.956.27 13.5 6.314 0 13.77 0s13.5 6.044 13.5 13.5z'></path>
      <path
        fill='#edfedb'
        d='M2 27.5c-.96 0-1.46-.46-1.055-1.383a.84.84 0 01.14-.214l4.03-4.586c-.422-.241-1.412-2.16 0 0l7.035 4.016c.795.454 2.514 1.47 1.62 1.667L2 27.5z'></path>
      <mask id='mask0_40_0' style={{ maskType: 'alpha' }} width='14' height='13' x='7' y='7' maskUnits='userSpaceOnUse'>
        <path
          fill='#3e7a02'
          fillRule='evenodd'
          d='M13.507 18.3c2.581 0 4.706-2.131 4.706-4.8 0-.25-.019-.497-.055-.737l1-1.015c.166.554.255 1.143.255 1.752 0 3.314-2.644 6-5.906 6-3.262 0-5.907-2.686-5.907-6s2.645-6 5.907-6c1.496 0 2.862.565 3.903 1.497l-.843.857a4.642 4.642 0 00-3.06-1.154c-2.582 0-4.707 2.131-4.707 4.8s2.125 4.8 4.707 4.8zm-3.07-5.102a.2.2 0 01.014-.277l.667-.623a.2.2 0 01.287.015l1.73 1.997 6.215-5.65a.2.2 0 01.287.018l.59.7a.2.2 0 01-.019.277l-6.704 6.096-.327.297a.2.2 0 01-.285-.017l-.29-.335-2.165-2.498z'
          clipRule='evenodd'></path>
      </mask>
      <g mask='url(#mask0_40_0)'>
        <path fill='#3e7a02' d='M4 3.5H24V23.5H4z'></path>
      </g>
    </svg>
  )
}

export default SuccessIcon
