import React from 'react'

const LabelInput = ({type = 'text', name, label}) => {
  return (
    <label htmlFor={name} class='flex flex-col gap-[0.5rem]'>
        <p>{label}</p>
        <input type={type} id={name} class="py-[0.5rem] px-[1rem] border border-gray-400 rounded-md" placeholder={name}/>
    </label>
  )
}

export default LabelInput