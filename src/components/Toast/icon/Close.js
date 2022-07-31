import React from 'react'

function CloseIcon({ width = '50', height = '50', className = 'fill-black' }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 50 50'>
      <mask id='mask0_516351_1648' style={{ maskType: 'alpha' }} width='25' height='25' x='12' y='12' maskUnits='userSpaceOnUse'>
        <path
          className={className}
          fillRule='evenodd'
          d='M32.709 35.941l-8.082-8.081-8.08 8.081a2.286 2.286 0 11-3.233-3.232l8.081-8.082-8.081-8.08a2.286 2.286 0 013.232-3.233l8.081 8.08 8.082-8.08a2.286 2.286 0 013.232 3.232l-8.081 8.081 8.081 8.082a2.286 2.286 0 11-3.232 3.232z'
          clipRule='evenodd'></path>
      </mask>
      <g mask='url(#mask0_516351_1648)'>
        <path className={className} d='M0 0H50V50H0z'></path>
      </g>
    </svg>
  )
}

export default CloseIcon
