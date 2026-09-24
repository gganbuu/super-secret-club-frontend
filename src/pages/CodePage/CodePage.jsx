import React from 'react'
import { Form } from 'react-router'
import LabelInput from '../../components/LabelInput/LabelInput'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'

const CodePage = () => {
  return (
    <main className='flex-1 flex flex-col justify-center items-center'>
      <Form className='flex flex-col justify-between w-xl border border-gray-400 rounded-xl py-[2rem] px-[2rem]'>
        <LabelInput label="Enter Code" placeholder="the super secret code ..."/>
        <PrimaryButton name="Submit"/>
      </Form>
    </main>
  )
}

export default CodePage