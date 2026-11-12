import React from 'react'

type Props = {}

export default function Sidebar({}: Props) {
  return (
    <aside className="w-64" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 h-screen">
        <ul className="space-y-2 font-medium">
          <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span className="ml-3">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span className="ml-3">Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}