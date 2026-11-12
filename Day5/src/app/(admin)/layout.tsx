// Admin Layout
import Header from "@/components/admin/Header"
import Footer from "@/components/admin/Footer"
import Sidebar from "@/components/admin/Sidebar"

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 p-4">{children}</main>
            </div>
            <Footer />
        </div>
    </>
  )
}
