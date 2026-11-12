// Front Layout
import Navbar from "@/components/front/Navbar"
import Footer from "@/components/front/Footer"

export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        {children}
      </div>
      <Footer />
    </>
  )
}
