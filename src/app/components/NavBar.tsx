'use client'

import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Navbar() {
  let { token, setToken } = useContext(AuthContext);
  return (
    <nav className='flex items-center justify-between flex-wrap bg-teal-500 p-6 w-full h-24'>
      <span className="font-semibold text-xl tracking-tight">SoundLumi</span>
      <input className="shadow-sm appearance-none border rounded w-2/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg" id="search" type="text" placeholder="Search..."></input>
      {token ?
        <p>{`Bem vindo`}</p> :
        <Link href={'/login'} className=''>Login</Link>}
    </nav>
  )
}