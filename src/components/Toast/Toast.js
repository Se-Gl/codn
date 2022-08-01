import React, { useEffect, useRef, useState } from 'react'
import CloseIcon from './icon/Close'
import InfoIcon from './icon/Info'
import ErrorIcon from './icon/Error'
import SuccessIcon from './icon/Success'

export const Toast = ({
  text = 'codn toast component',
  header = 'enter your title',
  icon = 'success',
  iconClass = 'bg-blue-8',
  progressColor = 'bg-blue',
  show = false,
  shadow = 'shadow-small-black',
  position = 'top-right',
  timeout = 5000,
  ariaLabel = 'toast-notification'
}) => {
  const toastRef = useRef('')

  useEffect(() => {
    toastRef.current.classList != undefined
      ? setTimeout(() => {
          toastRef.current.classList.remove('display-block')
          toastRef.current.classList.add('display-none')
        }, timeout)
      : null
  }, [show])

  const handleClose = () => {
    toastRef.current.classList.remove('display-block')
    toastRef.current.classList.add('display-none')
  }

  let checkPosition =
    (position === 'top-left' && 'top-0per left-0per') ||
    (position === 'top-right' && 'top-0per right-0per') ||
    (position === 'bottom-left' && 'bottom-0per left-0per') ||
    (position === 'bottom-right' && 'bottom-0per right-0per')

  let setAnimation = position.includes('right')
    ? 'fade-in-right animation-duration-300ms animation-forwards opacity-100per'
    : 'fade-in-left animation-duration-300ms animation-forwards opacity-100per'

  let checkIcon =
    (icon === 'success' && <SuccessIcon height='70' width='70' />) ||
    (icon === 'info' && <InfoIcon height='70' width='70' />) ||
    (icon === 'error' && <ErrorIcon height='70' width='70' />)

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setTimeout(function () {
      setProgress(100)
    }, 10)
  }, [])

  return show ? (
    <div
      aria-label={ariaLabel}
      style={{ zIndex: 99999 }}
      className={`fixed m-10px min-h-50px w-35rem rounded-5px bg-white opacity-0per ${shadow} ${checkPosition} ${setAnimation}`}
      ref={toastRef}>
      <div className='flex'>
        <button role='button' className='absolute top-0per right-0per mr-5px mt-5px' onClick={handleClose}>
          <CloseIcon width='20' height='20' />
        </button>
        <div className={`flex justify-content items-center min-w-30px px-10px rounded-left-radius-5px ${iconClass}`}>
          {checkIcon ? checkIcon : icon}
        </div>
        <div className='block py-10px px-10px'>
          <h3 className='text-15px font-600 mb-0px'>{header}</h3>
          <p className='text-15px font-400 text-gray'>{text}</p>
        </div>
      </div>

      <div className='w-100per h-5px'>
        <div
          className={`relative z-2 h-100per ${progressColor}`}
          style={{ width: `${progress}%`, transition: `width ${timeout}ms ease`, borderBottomLeftRadius: '5px' }}
        />
      </div>
    </div>
  ) : (
    <></>
  )
}
