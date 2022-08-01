import React, { useMemo, useEffect, useRef, useCallback } from 'react'
import CloseIcon from './icon/Close'
import InfoIcon from './icon/Info'
import ErrorIcon from './icon/Error'
import SuccessIcon from './icon/Success'

import './Toast.module.css'
import WarningIcon from './icon/Warning'

const ToastIcon = ({ type }) => {
  switch (type) {
    case 'success':
      return <SuccessIcon height='30' width='30' />
    case 'error':
      return <ErrorIcon height='30' width='30' />
    case 'info':
      return <InfoIcon height='30' width='30' />
    case 'warning':
      return <WarningIcon height='30' width='30' />
    default: {
      return <CloseIcon width='20' height='20' />
    }
  }
}

const ToastItem = ({ item, deleteToast, duration, progressColor, setAnimation, removeAnimation }) => {
  const itemRef = useRef()
  const getduration = duration
  const classNames = useMemo(() => {
    let classes = `${setAnimation}`

    return classes
  }, [])
  useEffect(() => {
    const timeID = setInterval(() => {
      deleteToast(item.id)
    }, getduration)

    return () => {
      clearInterval(timeID)
    }
  }, [])

  useEffect(() => {
    const timerID = setInterval(() => {
      itemRef.current.classList.remove(`${setAnimation}`)
      itemRef.current.classList.add(`${removeAnimation}`)
      clearInterval(timerID)
    }, getduration - 100)

    return () => {
      clearInterval(timerID)
    }
  }, [])

  const handleDeleteToast = useCallback((id) => {
    itemRef.current.classList.remove(`${setAnimation}`)
    itemRef.current.classList.add(`${removeAnimation}`)
    setTimeout(() => {
      deleteToast(id)
    }, 240)
  }, [])

  let handleIconBackground =
    (item.type == 'success' && 'bg-green-8') ||
    (item.type == 'error' && 'bg-red-8') ||
    (item.type == 'info' && 'bg-blue-8') ||
    (item.type == 'warning' && 'bg-orange-8')

  let handleProgressColor =
    (progressColor && progressColor) ||
    (item.type == 'success' && 'bg-greencss') ||
    (item.type == 'error' && 'bg-red') ||
    (item.type == 'info' && 'bg-blue') ||
    (item.type == 'warning' && 'bg-orange')

  console.log(progressColor)

  return (
    <div
      data-testid='toast-notification'
      className={`relative block w-35rem rounded-5px overflow-hidden shadow-small-gray-5 ${classNames} animation-duration-300ms animation-forwards opacity-100per my-10px min-h-75px`}
      ref={itemRef}>
      <div className={`flex min-h-75px h-100per items-center justify-center ${handleIconBackground}`}>
        <div className={`flex min-w-30px px-10px rounded-left-radius-5px `}>
          <ToastIcon type={item.type} />
        </div>
        <div className='flex-1 p-10px bg-white min-h-75px h-100per'>
          <div className='font-600 text-15px'>{item.title}</div>
          <div className='font-400 text-gray text-12px'>{item.content}</div>
          <div className='absolute top-2per right-2per cursor-pointer' onClick={() => handleDeleteToast(item.id)}>
            <ToastIcon type='close' />
          </div>
        </div>
        <div
          className={`toast_progress absolute bottom-0per left-0per h-5px w-100per ${handleProgressColor}`}
          style={{ animationDuration: `${getduration}ms`, borderBottomLeftRadius: '5px' }}
        />
      </div>
    </div>
  )
}

export default ToastItem
