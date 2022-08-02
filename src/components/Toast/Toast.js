import React, { useCallback } from 'react'
import ToastItem from './ToastItem'

export const Toast = ({
  toastList,
  setToastList,
  progressColor,
  duration = 5000,
  position = 'top-right',
  shadow = 'shadow-small-gray-5'
}) => {
  const deleteToast = useCallback(
    (id) => {
      setToastList((prevState) => {
        return [...prevState.filter((item) => item.id !== id)]
      })
    },
    [toastList]
  )

  let checkPosition =
    (position === 'top-left' && 'top-0per left-0per') ||
    (position === 'top-right' && 'top-0per right-0per') ||
    (position === 'bottom-left' && 'bottom-0per left-0per') ||
    (position === 'bottom-right' && 'bottom-0per right-0per')

  let setAnimation = position.includes('right') ? 'fade-in-right' : 'fade-in-left'
  let removeAnimation = position.includes('right') ? 'fade-out-right' : 'fade-out-left'

  return (
    <div className={`fixed z-99 m-10px ${checkPosition}`} style={{ zIndex: 99999 }}>
      {toastList.length > 0 ? (
        <>
          {toastList.map((item) => (
            <ToastItem
              key={item.id}
              item={item}
              deleteToast={deleteToast}
              duration={duration}
              setAnimation={setAnimation}
              removeAnimation={removeAnimation}
              progressColor={progressColor}
              shadow={shadow}
            />
          ))}
        </>
      ) : null}
    </div>
  )
}
