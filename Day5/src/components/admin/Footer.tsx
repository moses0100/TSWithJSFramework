import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className="bg-white border-t border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="text-center text-gray-500 dark:text-gray-400">
          © 2023 Your Company. All rights reserved.
        </div>
        <div className="text-center text-gray-500 dark:text-gray-400 mt-2">
            <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Terms of Service</a>
        </div>
        </div>
    </footer>
  )
}