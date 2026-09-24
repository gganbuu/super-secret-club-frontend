export async function allMessagesLoader() {
    const res = await fetch('/api/messages/allmessages',  { credentials: 'include' })
    if (!res.ok) throw new Response('Could not load messages', {status: res.status})
    return res.json()
}