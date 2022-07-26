import React, { useState, useRef, useEffect } from 'react'
import { BoxPlusIcon, PlusIcon } from './Icons'
import '../../style/green.css'

export function Accordion({
  expand,
  collapse,
  defaultStyle = true,
  boxStyle = false,
  headerStyle = 'text-15px font-600 text-black',
  headerStyleActive = (defaultStyle && 'text-15px font-600 text-blue pb-10px') ||
    (boxStyle && 'text-15px font-600 text-blue pb-10px'),
  iconColor,
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
      role='button'
      tabIndex={0}
      className={`${
        defaultStyle &&
        'cursor-pointer py-20px p-15px transition-all transition-duration-100ms ease text-black overflow-x-hidden focus:border-bottom-width-2px focus:text-gray-10 border-bottom-width-1px border-solid border-gray-9'
      } 
      ${
        boxStyle &&
        'cursor-pointer py-20px p-15px mb-10px transition-all transition-duration-100ms ease text-black overflow-x-hidden bg-white rounded-5px focus:outline-1px focus:outline-solid focus:text-blue text-blue border-1px border-solid border-gray-10'
      }
      `}
      onClick={toggleQuestion}
      onKeyPress={toggleQuestion}>
      <>
        <div className='flex items-center'>
          <h3 className={`mb-0px ${active ? headerStyleActive : headerStyle}`}>{expand}</h3>
          <span className={`ml-auto min-w-10px ${active ? 'pb-10px' : 'pb-0px'}`}>
            {boxStyle ? (
              <div
                className={`rounded-50per min-w-25px min-h-25px flex justify-center items-center shadow-small-gray-10 transition-all transition-duration-200ms ease ${
                  active && 'rotate-90deg bg-blue'
                }`}>
                <BoxPlusIcon active={active} width='10' height='12' iconColor={iconColor} />
              </div>
            ) : (
              <PlusIcon active={active} width='10' height='10' iconColor={iconColor} />
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
