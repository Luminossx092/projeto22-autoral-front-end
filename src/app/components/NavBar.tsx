export default function Navbar() {
  return (
    <nav className='flex items-center justify-between flex-wrap bg-teal-500 p-6 w-full h-24'>
      <span className="font-semibold text-xl tracking-tight">SoundLumi</span>
      <input className="shadow-sm appearance-none border rounded w-2/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg" id="search" type="text" placeholder="Search..."></input>
      <span className=''>Welcome User</span>
    </nav>
  )
}