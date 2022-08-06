import React from 'react'

// import '../../style/input.css'
// import '../../style/green.css'

export function Input({
  required,
  id,
  label,
  value,
  setValue,
  htmlFor,
  maxLength,
  minLength,
  type = 'text',
  autofocus = false,
  shadow = true,
  ariaLabel = 'input-field'
}) {
  return (
    <div className='relative'>
      <input
        autoFocus={autofocus}
        aria-label={ariaLabel}
        required={required}
        id={id}
        maxLength={maxLength}
        minLength={minLength}
        type={type}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className={`greeninput border-none bg-white rounded-10px pl-10px text-15px h-50px w-100per border-blue-9 focus:border-1px focus:border-solid ${
          shadow ? 'shadow-small-gray-9' : ''
        }`}
      />
      <label
        className='w-100per placeholder-text pl-10px absolute top-0per right-0per bottom-0per left-0per flex items-center pointer-events-none w-100per h-50px'
        htmlFor={htmlFor}>
        <div className='text translate-0per transition-all transition-duration-300ms text-black-7 text-15px'>{label}</div>
      </label>
    </div>
  )
}
