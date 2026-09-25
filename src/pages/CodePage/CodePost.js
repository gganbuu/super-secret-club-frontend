import { redirect } from "react-router";

export const CodePost =  async ({request}) => {
    const data = await request.formData();
    const secretCode = Object.fromEntries(data);

    const res = await fetch('/api/users/secretcode', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(secretCode),
        credentials: 'include',
    })

    if (!res.ok) {
        const data = await res.json()
        return data ?? { error: 'Something went wrong, please try again'}
    }

    return redirect('/messages')
}