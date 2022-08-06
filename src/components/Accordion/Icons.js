import React from 'react'
import '../../../dist/style/green.css'

export function BoxPlusIcon({
  width = '11',
  height = '20',
  active,
  iconColorExpanded = 'stroke-white',
  iconColorCollapse = 'stroke-blue'
}) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 11 20'>
      <path
        className={active ? iconColorExpanded : iconColorCollapse}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M1.545 18.44l8.22-8.256-8.22-8.257'></path>
    </svg>
  )
}

export function PlusIcon({
  width = '17',
  height = '17',
  active,
  iconColorExpanded = 'stroke-blue',
  iconColorCollapse = 'stroke-black'
}) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 17 17'>
      <path
        className={active ? iconColorExpanded : iconColorCollapse}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d={`${active ? 'M1.463 8.229h14' : 'M8.463 1.229v14 M1.463 8.229h14'}`}></path>
    </svg>
  )
}
