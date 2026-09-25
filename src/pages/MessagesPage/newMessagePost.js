import { redirect } from "react-router"


export async function newMessagePost({request}) {
    const data = await request.formData()
    const newMessageDetails = Object.fromEntries(data)
    const res = await fetch('/api/messages/newmessage', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newMessageDetails),
        credentials: 'include',
    })

    if (!res.ok) {
        const data = await res.json().catch(() => null)
        return data ?? { errors: [{ msg: 'Something went wrong, please try again'}]}
    }

    return redirect('/messages')
}   