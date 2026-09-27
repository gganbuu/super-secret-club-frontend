import React from 'react'

const Button = ({onClick, type = "button", inputValue='', inputName = '', name, disabled = false, formNoValidate = true}) => {
  return (
    <button name={inputName}
            value={inputValue}
            formNoValidate={formNoValidate} 
            disabled={disabled} 
            onClick={onClick} 
            type={type} className='cursor-pointer bg-blue-500 rounded-lg px-5 py-2 text-neutral-50 font-medium disabled:bg-gray-400 disabled:cursor-default'>
      {name}
    </button>
  )
}

export default Button