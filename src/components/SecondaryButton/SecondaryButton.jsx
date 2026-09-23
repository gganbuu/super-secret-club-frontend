import React from 'react'

const SecondaryButton = ({name, type = "button"}) => {
  return (
    <button type={type} className='cursor-pointer'>
        {name}
    </button>
  )
}

export default SecondaryButton