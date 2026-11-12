type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className="flex justify-center items-center p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">MyApp</div>
      <div className="ml-4">© 2025 MyApp. All rights reserved.</div>
    </footer>
  )
}