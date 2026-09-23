import {useState} from 'react'
import LabelInput from '../../components/LabelInput/LabelInput'
import { Form, useActionData, Link} from 'react-router'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'
import SecondaryButton from '../../components/SecondaryButton/SecondaryButton'

const LoginPage = () => {
  const logInData = useActionData();
  const message = logInData?.message ?? [];
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const handleUsername = (e) => {
        setUsername(e.target.value)
    }

  const handlePassword = (e) => {
      setPassword(e.target.value)
  }


  return (
    <main className='flex-1 flex justify-center items-center'>
      <Form method="POST" action="/login" className="flex flex-col justify-between w-xl min-h-[600px] border border-gray-400 rounded-xl py-[2rem] px-[2rem]">
        <header className='flex flex-col items-center'>
          <p className='flex text-3xl'>Login</p>
          <p className='text-red-500 text-sm'>
            {message}
          </p>
        </header>
        <main className='flex flex-col gap-3'>
          <LabelInput type='text'
                      name='username'
                      label='Username'
                      placeholder='username'
                      required={true}
                      onChange={handleUsername}>
          </LabelInput>
          <LabelInput type='password'
                      name='password'
                      label='Password'
                      placeholder='password'
                      required={true}
                      onChange={handlePassword}>
          </LabelInput>
          <p className="self-center">not part of the club yet? 
            <Link to="/signup">
              <span className="text-blue-500"> Sign Up</span>
            </Link>
          </p>
      </main>
      <footer className='flex justify-between'>
        <Link to="/">
          <SecondaryButton name="Cancel"/>
        </Link>
        <PrimaryButton type='submit' name="Submit"/>
      </footer>
        </Form>
    </main>
  )
}

export default LoginPage