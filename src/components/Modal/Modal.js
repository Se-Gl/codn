import { createPortal } from 'react-dom'
import React, { useEffect, useRef } from 'react'
import CloseIcon from './CloseIcon'
// import '../../../dist/style/green.css'

export const Modal = ({
  children,
  toggle,
  setToggle,
  className,
  backgroundAnimation = 'fade-in animation-duration-500ms animation-forwards',
  iconColor,
  closeIcon = <CloseIcon iconColor={iconColor} />,
  modalContentAnimation = 'fade-in animation-duration-500ms animation-forwards',
  useKeyInput = true,
  shadow = true,
  modalPadding = true
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
              className={`fixed z-97 left-0per top-0per bottom-0per right-0per backdrop-blur-30px text-black ${backgroundAnimation}`}
              style={{ backgroundColor: 'rgba(16,16,16,0.5)' }}
            />
            <ModalContent
              shadow={shadow}
              className={className}
              setToggle={setToggle}
              closeIcon={closeIcon}
              modalPadding={modalPadding}
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

const ModalContent = ({
  children,
  className,
  modalContentAnimation,
  closeIcon,
  shadow,
  setToggle,
  modalPadding,
  ...restProps
}) => {
  const modalRef = useRef()

  return (
    <div
      ref={modalRef}
      tabIndex={0}
      {...restProps}
      className={`fixed left-50per top-50per z-98 text-black overflow-x-hidden rounded-20px bg-white min-w-50rem sm:min-w-90vw md:min-w-90vw ${
        shadow ? 'shadow-small-black-2' : ''
      } ${className} ${modalContentAnimation}`}
      style={{ transform: 'translate(-50%, -50%)' }}>
      {/* Close button */}
      <div
        role='button'
        tabIndex={0}
        onKeyPress={setToggle.bind(this, false)}
        onClick={setToggle.bind(this, false)}
        className='absolute focus:outline-1px focus:outline-solid focus:outline-gray text-gray-9'
        style={{ top: '20px', right: '20px', zIndex: '99999' }}>
        {closeIcon}
      </div>
      <div className={modalPadding ? 'p-20px' : ''}>{children}</div>
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
