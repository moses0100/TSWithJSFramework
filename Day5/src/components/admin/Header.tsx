import React from 'react'

type Props = {}

export default function Header({}: Props) {
  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <img src="/logo.png" className="h-8 mr-3" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Admin Dashboard</span>
        </a>
        <div className="flex md:order-2">
          <button type="button" className="text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-lg text-sm p-2.5 mr-3 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-label="User menu">
            <span className="sr-only">Open user menu</span>
            <img src="/user-avatar.png" alt="User Avatar" className="w-8 h-8 rounded-full" />
          </button>
        </div>
        <div className="hidden md:flex md:w-auto">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Dashboard</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Settings</a>
            </li>
          </ul>
        </div>
        </div>
    </nav>
  )
}