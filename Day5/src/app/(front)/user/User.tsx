type Props = {}

// ฟังก์ชันที่ใช้ในการดึงข้อมูลผู้ใช้จาก API
async function fetchUsers(): Promise<User[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    // ตรวจสอบว่าการดึงข้อมูลสำเร็จหรือไม่
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }

    // แสดงข้อมูลที่ได้จาก API ใน console
    console.log('response', response)

    // แปลงข้อมูลที่ได้จาก API เป็น JSON และส่งกลับ
    return response.json()
}


export default async function UserPage({}: Props) {

    const users = await fetchUsers()

    return (
        <>
            <h1 className="text-2xl text-center py-4">User Lists</h1>
            <table className="table-auto w-full border-collapse border border-slate-500 mb-12">
                <thead>
                    <tr>
                        <th className="border border-slate-600 p-2">ID</th>
                        <th className="border border-slate-600 p-2">Name</th>
                        <th className="border border-slate-600 p-2">Username</th>
                        <th className="border border-slate-600 p-2">Email</th>

                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td className="border border-slate-600 p-2">{user.id}</td>
                            <td className="border border-slate-600 p-2">{user.name}</td>
                            <td className="border border-slate-600 p-2">{user.username}</td>
                            <td className="border border-slate-600 p-2">{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}