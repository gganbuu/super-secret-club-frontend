import React from 'react'

    const Button = ({onClick, type = "submit", }) => {
  return (
    <button class='bg-blue-500 rounded-lg px-5 py-2 text-neutral-50 font-medium'>
      Submit
    </button>
  )
}

export default Button