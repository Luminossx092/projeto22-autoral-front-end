import SideBar from "../components/SideBar";
import Navbar from "../components/NavBar";

export default function NavBar() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className='flex w-full justify-between'>
        <SideBar/>
        <Navbar/>
      </div>
    </main>
  )
}