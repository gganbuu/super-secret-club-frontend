import {useState } from 'react'
import { useActionData } from 'react-router'
import NavBar from '../../components/Navbar/NavBar'

import { Form } from 'react-router'
import LabelInput from '../../components/LabelInput/LabelInput'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'
import SecondaryButton from '../../components/SecondaryButton/SecondaryButton'
import { hasSpecialCharacters } from '../../utils/hasSpecialCharacter/hasSpecialCharacters'
import { hasUpperCase } from '../../utils/hasUpperCase/hasUpperCase'
import { hasNumber } from '../../utils/hasNumber/hasNumber'

export const SignUpPage = () => {
    const signUpData = useActionData();
    const errors = signUpData?.errors ?? [];

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    
    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }


    

    return (
    <>
        <main className='flex-1 flex justify-center items-center'>
            <Form method="POST" className="flex flex-col justify-between w-xl min-h-[600px] border border-gray-400 rounded-xl py-[2rem] px-[2rem]">
                <header className='flex flex-col items-center'>
                    <p className='flex text-3xl'>Sign Up</p>
                    <p className='text-red-500 text-sm'>
                        {errors.map(error => error.msg)}
                    </p>
                </header>
                <main className='flex flex-col gap-3'>
                    <LabelInput type='text' 
                                name='username' 
                                label='Username' 
                                placeholder='username' 
                                required={true} 
                                onChange={(e) => handleUsername(e)}>

                        <ul className='flex text-xs gap-x-[1rem] list-disc list-inside flex-wrap'>
                            <li className={username == '' ? 'text-color-black' : username.length > 7 && username.length < 21 ? 'text-green-500' : "text-red-500"}>Between 8-20 characters</li>
                            <li className={username == '' ? 'text-color-black' :!hasSpecialCharacters(username) ? 'text-green-500' : "text-red-500"}>No special characters</li>
                        </ul>
                    </LabelInput>
                    <LabelInput type='password' 
                                name='password' 
                                label='Password' 
                                placeholder='password' 
                                required={true}
                                onChange={(e) => handlePassword(e)}> 
                        <ul className='flex text-xs gap-x-[1rem] list-disc list-inside flex-wrap'>
                            <li className={password == '' ? 'text-color-black' : password.length > 7 && password.length < 21 ? 'text-green-500' : "text-red-500"}>Between 8-20 characters</li>
                            <li className={password == '' ? 'text-color-black' : hasUpperCase(password) ? 'text-green-500' : "text-red-500"}>At least one uppercase</li>
                            <li className={password == '' ? 'text-color-black' : hasNumber(password) ? 'text-green-500' : "text-red-500"}>At least one number</li>
                            <li className={password == '' ? 'text-color-black' : hasSpecialCharacters(password) ? 'text-green-500' : "text-red-500"}>At least one special character</li>
                        </ul>
                    </LabelInput>
                    <LabelInput type='password' 
                                name='confirmPassword' 
                                label='Confirm Password'
                                placeholder='confirm password'
                                required={true}
                                onChange={(e) => handleConfirmPassword(e)}>
                        <ul className='flex text-xs gap-x-[1rem] list-disc list-inside flex-wrap'>
                            <li className={confirmPassword == '' ? 'text-color-black' : password == confirmPassword ? 'text-green-500' : "text-red-500"}>Matches password</li>
                        </ul>
                    </LabelInput>
                </main>
                <footer className="flex justify-between">
                    <SecondaryButton name="Cancel"/>
                    <PrimaryButton type='submit' name="Submit"/>
                </footer>
            </Form>
        </main>
    </>
  )
}
