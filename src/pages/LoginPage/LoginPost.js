import { redirect } from "react-router"

export const LoginPost =  async ({request}) => {
    const body = await request.formData()

    //retrieve signup details as key-value pairs from formData ---> {username: 'username' password: ...}
    const logInDetails = Object.fromEntries(body)

    const res = await fetch('/api/users/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(logInDetails),
        credentials: 'include', // send/receive the session cookie
    })

    // handle the response
    if (!res.ok) {
        const data = await res.json().catch(() => null)
        return data ?? { errors: [{ msg: 'Something went wrong, please try again' }] }
    }

     
    return redirect('/success');
}