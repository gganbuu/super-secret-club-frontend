export async function layoutLoader() {
    // fetch the user's details if they are logged in; crendtials included flag needed so that 
    // session cookie sent over
    const res = await fetch('/api/users/me', { 
        method: 'GET',
        credentials: 'include'
    })
    if (!res.ok) return { user: null }
    return res.json()
}