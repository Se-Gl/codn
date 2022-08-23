import React, { useEffect, useState } from 'react'
// import '../../../dist/style/green.css'

export function CookieBanner({
  header = '🍪 Our website uses cookies',
  shadow = true,
  position = 'bottom-right',
  showButton = true,
  buttonText = 'Accept',
  buttonStyle = 'mt-25px cursor-pointer flex py-10px px-25px min-w-50px font-bold transition-duration-200ms transition-all rounded-10px border-1px border-solid border-black my-auto text-center justify-center items-center mx-auto my-auto text-15px text-black hover:bg-black hover:text-white',
  className,
  children
}) {
  const [cookieBanner, setCookieBanner] = useState(true)
  const getCookie = () => {
    if (typeof window !== 'undefined') {
      const localCookie = localStorage.getItem('cookie')
      if (localCookie) return JSON.parse(localCookie)
    }
    return ''
  }

  useEffect(() => {
    getCookie() == 'accepted' && setCookieBanner(false)
  }, [])

  const cookie = () => {
    localStorage.setItem('cookie', JSON.stringify('accepted'))
    setCookieBanner(false)
  }

  let checkPosition =
    (position === 'top-left' && 'top-0per left-0per') ||
    (position === 'top-right' && 'top-0per right-0per') ||
    (position === 'bottom-left' && 'bottom-0per left-0per') ||
    (position === 'bottom-right' && 'bottom-0per right-0per')

  return (
    <>
      {cookieBanner && (
        <div
          className={`fixed m-20px max-h-50vh w-50vw sm:w-auto md:w-auto bg-white z-99 rounded-10px overflow-y-auto overflow-x-hidden ${
            shadow ? 'shadow-small-gray' : ''
          } ${position && checkPosition} ${className}`}
          id='cookie-banner'>
          <div className='flex h-100per sm:block p-20px'>
            <div className='m-auto'>
              <h3 className='text-25px font-600'>{header}</h3>
              {children ? (
                children
              ) : (
                <p className='text-15px text-gray font-400'>
                  Our website use cookies. By continuing, we assume your permission to deploy cookies as detailed in our{' '}
                  <span className='text-blue'>Privacy Policy.</span>
                </p>
              )}
              {showButton && (
                <button onClick={cookie} id='close-cookie' className={`${buttonStyle}`}>
                  {buttonText}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
