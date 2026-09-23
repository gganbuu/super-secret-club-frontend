import { redirect } from "react-router"

export const LogOutPost = async ({ request }) => {
    await fetch('/api/users/logout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        credentials: 'include'
    })
    return redirect('/login')
}