import React, { useState } from 'react'
import { Pencil } from 'lucide-react';
import { useRouteLoaderData } from 'react-router';

const Message = ({message, onEdit}) => {
    const { user } = useRouteLoaderData('root')
    const isOwner = !!user && user?.id === message.user_id

    const time = new Date(message.time_created);
    const formattedDate = new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour12: false // Set to true if you prefer 12-hour AM/PM format
    }).format(time).replace(',', '');



    return (
        <section className='flex flex-row gap-[1rem]'>
            <p className='self-end'>
                {message.username || 'anon'}
            </p>

            <div className='flex flex-col'>
                <div className='bg-blue-300 p-[1rem] gap-[1rem] rounded-xl flex flex-col'>
                    <div className='flex justify-between gap-[1rem]'>
                        <h1 className='font-bold'>{message.title}</h1>
                        {isOwner && <Pencil onClick={() => onEdit()}
                        className='text-blue-300 hover:text-gray-400 cursor-pointer'/>}
                    </div>
                    <p>{message.content}</p>
                </div>
                <p className='self-end px-[1rem]'>{formattedDate}</p>
            </div>
        </section>
  )
}

export default Message