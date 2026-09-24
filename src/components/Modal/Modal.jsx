import React from 'react'

const Modal = ({children}) => {
  return (
    <div className="fixed z-1 inset-0 bg-gray-800/50">
        {children}
    </div>
  )
}

export default Modal