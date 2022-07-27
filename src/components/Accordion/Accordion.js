import React, { useState, useRef, useEffect } from 'react'
import { BoxPlusIcon, PlusIcon } from './Icons'
import '../../style/green.css'

export function Accordion({
  expand = 'Your title',
  collapse = 'Your collapsed content',
  className = 'bg-white',
  boxStyle = false,
  headerStyle = 'text-15px font-600 text-black',
  headerStyleExpanded = 'text-15px font-600 text-blue pb-10px',
  iconColorExpanded,
  iconColorCollapse,
  circleExpand = 'rotate-90deg bg-blue',
  circleCollapse = 'shadow-small-gray-10 bg-white',
  collapseStyle = 'text-15px text-black'
}) {
  const [active, setActive] = useState(false)

  const contentRef = useRef(null)

  useEffect(() => {
    contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : '0px'
  }, [contentRef, active])

  const toggleQuestion = () => {
    setActive(!active)
  }
  return (
    <div
      id='accordion'
      role='button'
      tabIndex={0}
      className={`
      ${
        boxStyle
          ? 'cursor-pointer py-20px p-15px mb-10px transition-all transition-duration-100ms ease text-black overflow-x-hidden rounded-5px focus:outline-1px focus:outline-solid focus:text-blue-9 text-blue border-1px border-solid border-gray-10'
          : 'cursor-pointer py-20px p-15px transition-all transition-duration-100ms ease text-black overflow-x-hidden focus:border-bottom-width-2px focus:text-gray-10 border-bottom-width-1px border-solid border-gray-9'
      } ${className}
      `}
      onClick={toggleQuestion}
      onKeyPress={toggleQuestion}>
      <>
        <div className='flex items-center'>
          <h3 className={`mb-0px ${active ? headerStyleExpanded : headerStyle}`}>{expand}</h3>
          <span className={`ml-auto min-w-10px ${active ? 'pb-10px' : 'pb-0px'}`}>
            {boxStyle ? (
              <div
                className={`rounded-50per min-w-25px min-h-25px flex justify-center items-center transition-all transition-duration-200ms ease ${
                  active ? `${circleExpand}` : `${circleCollapse}`
                }`}>
                <BoxPlusIcon
                  active={active}
                  width='10'
                  height='12'
                  iconColorExpanded={iconColorExpanded}
                  iconColorCollapse={iconColorCollapse}
                />
              </div>
            ) : (
              <PlusIcon
                active={active}
                width='10'
                height='10'
                iconColorExpanded={iconColorExpanded}
                iconColorCollapse={iconColorCollapse}
              />
            )}
          </span>
        </div>
        <div ref={contentRef} className='overflow-hidden transition-all transition-duration-300ms ease'>
          <p className={`relative z-99 mb-0px ${collapseStyle}`}>{collapse}</p>
        </div>
      </>
    </div>
  )
}
