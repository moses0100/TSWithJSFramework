import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description: "Home page of the Next.js application",
}

export default function Home() {
  return (
    <>
      <h1 className="text-3xl">Hello Next.JS</h1>
      <p className="text-lg text-orange-400">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
    </>
  )
}