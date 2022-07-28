import React, { useEffect } from 'react'

export function TextArea({
  required,
  id,
  label,
  value,
  setValue,
  htmlFor,
  maxLength,
  type = 'text',
  autofocus = false,
  shadow = true,
  ariaLabel = 'textarea-field'
}) {
  {
    autofocus &&
      useEffect(() => {
        document.querySelector('[contenteditable]').focus()
      }, [])
  }

  const onKeyDwn = (e) => {
    // * Check if a keycode is allowed when max limit is reached
    // * 8 : Backspace
    // * 37: LeftKey
    // * 38: UpKey
    // * 39: RightKey
    // * 40: DownKey
    // * ctrlKey for control key
    // * metakey for command key on mac keyboard
    const currentTextLength = e.target.outerText.length
    if (
      (currentTextLength === maxLength && e.keyCode != 8) ||
      e.keyCode === 37 ||
      e.keyCode === 38 ||
      e.keyCode === 39 ||
      e.keyCode === 40 ||
      e.ctrlKey ||
      e.metaKey
    ) {
      e.preventDefault()
    }
  }

  return (
    <div className='relative'>
      <div
        tabIndex={autofocus ? 1 : 0}
        aria-label={ariaLabel}
        autoFocus={autofocus}
        spellCheck='false'
        contentEditable='true'
        required={required}
        id={id}
        maxLength={maxLength}
        onKeyDown={maxLength >= 1 ? onKeyDwn : null}
        type={type}
        onInput={(e) => setValue(e.currentTarget.textContent)}
        value={value}
        className={`greeninput greentextarea border-none bg-white rounded-10px pl-10px text-15px h-50px w-100per border-blue-9 focus:border-1px focus:border-solid ${
          shadow ? 'shadow-small-gray-9' : ''
        }`}
      />

      <label
        className='placeholder-text pl-10px absolute top-0per right-0per bottom-0per left-0per flex items-center pointer-events-none w-100per h-50px'
        htmlFor={htmlFor}>
        <div className='text translate-0per transition-all transition-duration-300ms text-black-7 text-15px'>{label}</div>
      </label>
    </div>
  )
}
