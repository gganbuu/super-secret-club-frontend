import React from 'react'

const LabelInput = ({type = 'text', name, label, placeholder = 'Value', required = false, children, onChange}) => {
  return (
    <label htmlFor={name} className='flex gap-[1rem] flex-col'>
        <div>
          <p className='font-medium text-lg'>{label}</p>
          {children}
        </div>
        <input type={type} 
                id={name} 
                name={name} 
                className="py-[0.5rem] px-[1rem] border border-gray-400 rounded-md" 
                required={required} 
                placeholder={placeholder}
                onChange={(e) => onChange(e)}/>
    </label>
  )
}

export default LabelInput