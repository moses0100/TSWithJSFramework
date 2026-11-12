type Props = {}

export default function AdminPage({}: Props) {
  return (
    <>
       {/* Dashboard */}
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>
            <p className="mt-4 text-lg text-gray-600">Welcome to the admin panel!</p>
            <p className="mt-2 text-lg text-gray-600">Manage your application settings and content here.</p>
        </div>
    </>
  )
}