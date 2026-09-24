import React from 'react'

const Message = ({message}) => {
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
                {message.username}
            </p>

            <div className='bg-blue-300 p-[1rem] gap-[1rem] rounded-xl flex flex-col'>
                <h1 className='font-bold'>{message.title}</h1>
                <p>{message.content}</p>
                <p className='self-end'>{formattedDate}</p>
            </div>
        </section>
  )
}

export default Message