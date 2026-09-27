import { redirect } from "react-router"


export async function newMessagePost({request}) {
    const data = await request.formData()
    const messageDetails = Object.fromEntries(data)

    if (messageDetails.intent === 'post') {
            const res = await fetch('/api/messages/newmessage', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(messageDetails),
            credentials: 'include',
        })
        if (!res.ok) {
            const data = await res.json().catch(() => null)
            return data ?? { errors: [{ msg: 'Something went wrong, please try again'}]}
        }
        return redirect('/messages')
    
    } else if (messageDetails.intent === 'delete') {
        const res = await fetch('/api/messages/deletemessage', { 
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(messageDetails), 
            credentials: 'include'
        })
    }
    else {
        const res = await fetch('/api/messages/editmessage', { 
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(messageDetails), 
            credentials: 'include'
        })

        if (!res.ok) {
            const data = await res.json().catch(() => null)
            return data ?? { errors: [{ msg: 'Something went wrong, please try again'}]}
        }
        return redirect('/messages')
    }


}   