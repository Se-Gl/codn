import React from 'react'

function InfoIcon({ width = '50', height = '50' }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 28 28'>
      <path
        fill='#DBEAFE'
        d='M27.27 13.5c0 7.456-6.044 13.5-13.5 13.5S.27 20.956.27 13.5 6.314 0 13.77 0s13.5 6.044 13.5 13.5z'></path>
      <path
        fill='#DBEAFE'
        d='M2 27.5c-.96 0-1.46-.46-1.055-1.383a.84.84 0 01.14-.214l4.03-4.586c-.422-.241-1.412-2.16 0 0l7.035 4.016c.795.454 2.514 1.47 1.62 1.667L2 27.5z'></path>
      <mask id='mask0_40_0' style={{ maskType: 'alpha' }} width='14' height='12' x='7' y='7' maskUnits='userSpaceOnUse'>
        <path
          fill='#066EF9'
          fillRule='evenodd'
          d='M14.52 7.5a.6.6 0 00-1.04 0L7.591 17.7a.6.6 0 00.52.9h11.778a.6.6 0 00.52-.9l-5.89-10.2zm-1.32 2.908a.2.2 0 01.2-.208h1.2a.2.2 0 01.2.208l-.187 4.8a.2.2 0 01-.2.192h-.826a.2.2 0 01-.2-.192l-.187-4.8zM13.395 16c0-.11.09-.2.2-.2h.812c.11 0 .2.09.2.2v.8a.2.2 0 01-.2.2h-.812a.2.2 0 01-.2-.2V16z'
          clipRule='evenodd'></path>
      </mask>
      <g mask='url(#mask0_40_0)'>
        <path fill='#066EF9' d='M4 3H24V23H4z'></path>
      </g>
    </svg>
  )
}

export default InfoIcon
