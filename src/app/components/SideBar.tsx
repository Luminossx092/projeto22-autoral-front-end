import Link from "next/link";

export default function SideBar() {
  return (
    <nav className="gap-y-4 flex flex-col justify-center bg-yellow-600">
      <Link href={'/'} className="rounded-2xl bg-blue-600 w-24 h-24 hover:bg-purple-600">{

      }</Link>
    </nav>)
}