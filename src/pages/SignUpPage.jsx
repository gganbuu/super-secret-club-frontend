import React from 'react'
import { Form } from 'react-router'

export const SignUpPage = () => {
  return (
    <div class='flex flex-col min-h-screen'>
        <header class='h-[4rem]'>
        </header>
        <main class='flex-1 flex justify-center items-center'>
            <div class="w-xl min-h-[600px] border border-gray-400 rounded-xl py-[2rem] px-[2rem]">
                <header class='flex flex-col items-center'>
                    <p class='flex text-3xl'>Sign Up</p>
                </header>
                <Form class='flex flex-col'>
                    <label htmlFor="username" class='flex flex-col gap-[0.75rem]'>
                        <p>Username</p>
                        <input id='username' class="py-[0.5rem] px-[1rem] border border-gray-400 rounded-md" placeholder="username"/>
                    </label>
                </Form>
            </div>
        </main>

        <footer class='h-[4rem]'>
        </footer>
    </div>
  )
}
