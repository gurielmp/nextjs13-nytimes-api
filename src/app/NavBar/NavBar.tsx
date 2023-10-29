import Image from "next/image"
import Link from "next/link"

export default function NavBar() {
  return (
    <div className="navbar bg-[#e1e7f4] mb-5">
      <Link href="/" className="btn btn-ghost normal-case text-xl">
        <Image
          src="/new-york-times-logo.png"
          alt="logo"
          width={250}
          height={150}
        />
      </Link>
    </div>
  )
}
