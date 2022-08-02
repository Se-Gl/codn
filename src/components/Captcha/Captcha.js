import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'

export const Captcha = forwardRef(
  (
    {
      setWord,
      numberOfCharacters = 5,
      backgroundColor = '#101010',
      fontColor = '#f0eef5',
      charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!=?+*%&'
    },
    ref
  ) => {
    const canvas = useRef(null)
    const getCharset = charset
    let length = parseInt(numberOfCharacters)

    const initializeCaptcha = () => {
      let retVal = ''
      let captcha = ''
      for (let i = 0, n = getCharset.length; i < length; ++i) {
        retVal += getCharset.charAt(Math.floor(Math.random() * n))
      }

      captcha = retVal

      setWord ? setWord(captcha) : null

      const canvasEl = canvas.current
      const ctx = canvasEl.getContext('2d')
      let text = captcha
      let lineheight = 25

      let lines = text.split('\n')
      ctx.canvas.width = parseInt(length) * 20
      ctx.canvas.height = lines.length * lineheight * 2

      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, canvasEl.width, canvasEl.height)

      ctx.textBaseline = 'middle'
      ctx.font = 'italic 25px "Open Sans", sans-serif'
      ctx.fillStyle = fontColor
      ctx.textAlign = 'center'
      ctx.fillText(retVal, canvasEl.width / 2, canvasEl.height / 2)
    }

    useImperativeHandle(ref, () => ({
      initializeCaptcha
    }))

    useEffect(() => {
      initializeCaptcha()
    }, [])

    return (
      <>
        <canvas
          ref={canvas}
          className='cursor-pointer shadow-small-gray rounded-5px'
          onClick={initializeCaptcha}
          title='Click to regenerate'></canvas>
      </>
    )
  }
)
