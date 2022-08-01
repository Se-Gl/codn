import React from 'react'

function WarningIcon({ width = '50', height = '50' }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 28 28'>
      <path
        fill='#FEEFDB'
        d='M27.27 13.5c0 7.456-6.044 13.5-13.5 13.5S.27 20.956.27 13.5 6.314 0 13.77 0s13.5 6.044 13.5 13.5z'></path>
      <path
        fill='#FEEFDB'
        d='M2 27.5c-.96 0-1.46-.46-1.055-1.383a.84.84 0 01.14-.214l4.03-4.586c-.422-.241-1.412-2.16 0 0l7.035 4.016c.795.454 2.514 1.47 1.62 1.667L2 27.5z'></path>
      <mask id='mask0_40_0' style={{ maskType: 'alpha' }} width='12' height='14' x='8' y='7' maskUnits='userSpaceOnUse'>
        <path
          fill='#000'
          fillRule='evenodd'
          d='M18 9.97c.364.884.467 3.653.494 5.538h.006l1.5 1.846v.923H8v-.923l1.5-1.846h.023c.04-1.921.155-4.757.477-5.539.648-1.572 1.862-2.769 4-2.769s3.352 1.197 4 2.77zm-4 10.615c1.02 0 1.846-.827 1.846-1.847h-3.692c0 1.02.826 1.847 1.846 1.847z'
          clipRule='evenodd'></path>
      </mask>
      <g mask='url(#mask0_40_0)'>
        <path fill='#F99106' d='M4 4H24V24H4z'></path>
      </g>
    </svg>
  )
}

export default WarningIcon
