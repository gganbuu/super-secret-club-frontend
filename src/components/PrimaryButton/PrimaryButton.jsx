import React from 'react'

const Button = ({onClick, type = "button", name}) => {
  return (
    <button type={type} className='cursor-pointer bg-blue-500 rounded-lg px-5 py-2 text-neutral-50 font-medium'>
      {name}
    </button>
  )
}

export default Button