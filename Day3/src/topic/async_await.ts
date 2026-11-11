interface User {
    id: number
    name: string
    email: string
    phone: string
}

export const asyncawait = () => {
    // ตัวอย่างการใช้งาน async await
    async function getUserData(): Promise<void> {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/5')
            const data = await response.json()
            console.log('User data', data)
        } catch (error) {
            console.log('Failed to fetch user data', error)
        }
    }

    // getUserData()

    async function getUserType(): Promise<User> {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/5')
        return response.json()
    }

    getUserType()
        .then((user) => {
            console.log('User data', user.phone)
        })
        .catch((error: unknown) => {
            console.error('Failed to fetch user data', error)
        })
}