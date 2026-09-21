import { redirect } from "react-router"

export async function SignUpPost({request}) {
    //retrieve body data
    const body = await request.formData()

    //retrieve signup details as key-value pairs from formData ---> {username: 'username' password: ...}
    const signUpDetails = Object.fromEntries(body)

    // send res header
    const res = await fetch('/api/users/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(signUpDetails),
        credentials: 'include', // send/receive the session cookie
    })

    // handle the response
    if (!res.ok) {
        const data = await res.json().catch(() => null)
        return data ?? { errors: [{ msg: 'Something went wrong, please try again' }] }
    }

     
    return redirect('/success');
    
}