import Link from "next/link"
import { ReactNode } from "react"
import Image from "next/image"

interface NavLinkProps {
  href: string
  children: ReactNode
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link href={href} className="text-muted-foreground hover:text-foreground transition-colors">
      {children}
    </Link>
  )
}

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <Link href="/" className="text-2xl flex items-center font-bold text-primary">
      <Image src={'/nexa-logo.png'} className={`mr-2`} width={40} height={40} alt='logo' unoptimized/>
        Nexatunes
      </Link>
      <nav className="hidden md:flex items-center space-x-8">
        <NavLink href="/distribution">Distribution</NavLink>
        <NavLink href="/pricing">Pricing</NavLink>
        <NavLink href="/support">Support</NavLink>
        <NavLink href="/news">News</NavLink>
        <a>|</a>
        <Link href="/get-in-touch" className="rounded-full border border-black py-1.5 px-3.5 hover:bg-black hover:text-white">Get In Touch</Link>
        <Link
          href="/login"
          className="px-4 py-2 bg-zinc-900 text-white rounded-md hover:bg-zinc-900/90 transition-colors"
        >
          Login
        </Link>
      </nav>
      <button className="md:hidden">Menu</button>
    </header>
  )
}