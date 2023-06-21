import Navbar from './components/NavBar'
import SideBar from './components/SideBar'

export default function Home() {
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
