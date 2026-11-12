"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

type Props = {};

export default function Navbar({}: Props) {

  const pathname = usePathname()

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">MyApp</div>
      <ul className="flex space-x-4">
        <li className="hover:text-gray-400 cursor-pointer">
          <Link href="/" className={
            pathname === "/" ? "text-orange-400" : "text-white"
          }>Home</Link>
        </li>
        <li className="hover:text-gray-400 cursor-pointer">
          <Link href="/about" className={
            pathname === "/about" ? "text-orange-400" : "text-white"
          }>About</Link>
        </li>
        <li className="hover:text-gray-400 cursor-pointer">
          <Link href="/contact" className={
            pathname === "/contact" ? "text-orange-400" : "text-white"
          }>Contact</Link>
        </li>
        <li className="hover:text-gray-400 cursor-pointer">
          <Link href="/user" className={
            pathname === "/user" ? "text-orange-400" : "text-white"
          }>Users</Link>
        </li>
        <li className="hover:text-gray-400 cursor-pointer">
          <Link href="/login" className={
            pathname === "/login" ? "text-orange-400" : "text-white"
          }>Login</Link>
        </li>
        <li className="hover:text-gray-400 cursor-pointer">
          <Link href="/register" className={
            pathname === "/register" ? "text-orange-400" : "text-white"
          }>Register</Link>
        </li>
      </ul>
    </nav>
  )
}
