import { createPortal } from 'react-dom'
import React, { useEffect, useRef } from 'react'
import CloseIcon from './CloseIcon'
import '../../style/green.css'

export const Modal = ({
  children,
  toggle,
  setToggle,
  className,
  backgroundAnimation = 'fade-in animation-duration-500ms animation-forwards',
  closeIcon = <CloseIcon />,
  modalContentAnimation = 'fade-in animation-duration-500ms animation-forwards',
  useKeyInput = true,
  shadow = true
}) => {
  useKeyInput === true &&
    useEffect(() => {
      //   ESC key to close the modal
      const close = (e) => {
        if (e.keyCode === 27) {
          setToggle()
        }
      }
      window.addEventListener('keydown', close)
      // CTRL + k key to open the modal
      const opener = (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
          e.preventDefault()
          setToggle(true)
        }
      }
      document.addEventListener('keydown', opener)

      return () => window.removeEventListener('keydown', close) || document.removeEventListener('keydown', opener)
    }, [])

  return (
    typeof window !== 'undefined' &&
    createPortal(
      <>
        {toggle && (
          <>
            <div
              onClick={setToggle.bind(this, false)}
              className={`fixed left-0per top-0per bottom-0per right-0per backdrop-blur-30px text-black ${backgroundAnimation}`}
              style={{ backgroundColor: 'rgba(16,16,16,0.5)' }}
            />
            <ModalContent
              shadow={shadow}
              className={className}
              setToggle={setToggle}
              closeIcon={closeIcon}
              modalContentAnimation={modalContentAnimation}>
              {children}
            </ModalContent>
          </>
        )}
      </>,
      document.querySelector('#modal-portal')
    )
  )
}

const ModalContent = ({ children, className, modalContentAnimation, closeIcon, shadow, setToggle, ...restProps }) => {
  const modalRef = useRef()

  return (
    <div
      ref={modalRef}
      tabIndex={0}
      {...restProps}
      className={`text-black overflow-x-hidden fixed left-50per top-50per rounded-20px bg-white min-w-50rem max-w-50vw sm:min-w-90vw md:min-w-90vw max-h-75vh ${
        shadow ? 'shadow-small-black-2' : ''
      } ${className} ${modalContentAnimation}`}
      style={{ transform: 'translate(-50%, -50%)' }}>
      {/* Close button */}
      <div
        role='button'
        tabIndex={0}
        onKeyPress={setToggle.bind(this, false)}
        onClick={setToggle.bind(this, false)}
        className='absolute z-1 focus:outline-1px focus:outline-solid focus:outline-gray text-gray-9'
        style={{ top: '20px', right: '20px' }}>
        {closeIcon}
      </div>
      <div className='p-20px'>{children}</div>
    </div>
  )
}

// Modal header
Modal.Header = ({ children, className, ...restProps }) => {
  return (
    <header className={`text-20px font-bold mb-20px max-w-90per ${className}`} {...restProps}>
      {children}
    </header>
  )
}

// Modal body
Modal.Body = ({ children, className, ...restProps }) => {
  return (
    <div className={`${className}`} {...restProps}>
      {children}
    </div>
  )
}

// Modal footer
Modal.Footer = ({ children, className, ...restProps }) => {
  return (
    <footer className={`mt-20px ${className}`} {...restProps}>
      {children}
    </footer>
  )
}
