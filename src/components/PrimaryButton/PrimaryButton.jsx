import React from 'react'

const Button = ({onClick, type = "button", name, disabled = false}) => {
  return (
    <button disabled={disabled} onClick={onClick} type={type} className='cursor-pointer bg-blue-500 rounded-lg px-5 py-2 text-neutral-50 font-medium disabled:bg-gray-400 disabled:cursor-default'>
      {name}
    </button>
  )
}

export default Button