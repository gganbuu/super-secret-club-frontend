import React from 'react'
import { Form } from 'react-router'
import LabelInput from '../components/LabelInput'
import PrimaryButton from '../components/PrimaryButton'

export const SignUpPage = () => {
  return (
    <div class='flex flex-col min-h-screen'>
        <header class='h-[4rem]'>
        </header>
        <main class='flex-1 flex justify-center items-center'>
            <Form class="w-xl min-h-[600px] border border-gray-400 rounded-xl py-[2rem] px-[2rem]">
                <header class='flex flex-col items-center'>
                    <p class='flex text-3xl'>Sign Up</p>
                </header>
                <main class='flex flex-col gap-[2rem]'>
                    <LabelInput type='text' name='username' label='Username'/>
                    <LabelInput type='password' name='password' label='Password'/>
                    <LabelInput type='password' name='confirmPassword' label='Confirm Password'/>                    
                </main>
                <footer>
                    <PrimaryButton/>
                </footer>
            </Form>
        </main>

        <footer class='h-[4rem]'>
        </footer>
    </div>
  )
}
