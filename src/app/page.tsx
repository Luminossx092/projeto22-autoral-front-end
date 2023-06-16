'use client'

import Link from 'next/link'
import { MusicalNoteIcon, FireIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Modal from './components/Modal';
import Navbar from './components/NavBar'
import SideBar from './components/SideBar'

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-start">
          <Navbar />
          <div className='flex w-full justify-between'>
            <SideBar />
          </div>
        </main>
    </>
  )
}
