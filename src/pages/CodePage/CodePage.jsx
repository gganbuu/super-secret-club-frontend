import React from 'react'
import { Form, useActionData } from 'react-router'
import LabelInput from '../../components/LabelInput/LabelInput'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'

const CodePage = () => {
  const errors = useActionData()

  return (
    <main className='flex-1 flex flex-col justify-center items-center'>
      <Form method="POST" className='flex flex-col justify-between w-xl border border-gray-400 rounded-xl py-[2rem] px-[2rem]'>
        <LabelInput label="Enter Code" name="secretcode" placeholder="the super secret code ..."/>
        <p className='text-red-500'>{errors && errors.message}</p>
        <PrimaryButton type="submit" name="Submit"/>
      </Form>
    </main>
  )
}

export default CodePage