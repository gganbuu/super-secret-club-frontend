import {useState} from 'react'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'
import Modal from '../../components/Modal/Modal'
import { Form, useLoaderData, useRouteLoaderData, useActionData} from 'react-router'
import Message from '../../components/Message/Message'

const MessagesPage = () => {
  //loaders
  const { messages } = useLoaderData()
  const  messageData = useActionData()
  const errors = messageData?.errors ?? [];
  const { user } = useRouteLoaderData('root')

  //state
  const [modalState, setModalState] = useState(false)
  const toggleModal = () => {
    setModalState(!modalState)
  }
  


  return (
    <>
      <main className='flex-1 flex flex-col justify-center items-center'>
        <section className='flex-1 flex flex-col w-2xl border border-gray-400 rounded-xl p-[2rem] gap-[1rem]'>
          <header className='flex justify-center'>
            <h3 className='font-bold'>Messages</h3>
          </header>
          <main className='flex-1 flex flex-col gap-[1rem] overflow-y-auto'>
            {messages.length > 0 && messages.map(message => {
              return <Message key={message.id} message={message} hidden={false}/>
            })}
          </main>
          <footer className='flex justify-center'>
            <PrimaryButton disabled={!user} name="New message" onClick={toggleModal}/>
          </footer>
        </section>
      </main>

      {modalState && (
        <Modal>
          <Form method="POST" className="flex flex-col bg-white w-xl h-[600px] my-[10%] mx-auto rounded-xl p-[2rem] gap-[1rem]">
            <header className='flex items-center justify-between'>
              <h1 className="px-[1rem] font-bold">New message</h1>
              <button className="px-[1rem] cursor-pointer" onClick={toggleModal} type="button" >X</button>
            </header>
            <main className='flex-1 flex flex-col gap-[1rem] min-h-0'>
              <p className='text-red-500 text-sm'>
                {errors.map(error => error.msg)}
              </p>
              <input className="w-full px-[1rem] py-[0.8rem]"  type="text" placeholder="title" name="title" id="title" required={true}/>
              <textarea className="flex-1 w-full min-h-0 p-[1rem] box-border resize-none" placeholder="a new message..." name="content" id="content" required={true}></textarea>
            </main>
            <footer className="flex flex-row justify-end">
              <PrimaryButton type="submit" name="Post"/>
            </footer>
          </Form>
        </Modal>
      )}
    </>
  )
}

export default MessagesPage