import Link from "next/link"
import { ReactNode } from "react"

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
      <Link href="/" className="text-2xl font-bold text-primary">
        Nexatunes
      </Link>
      <nav className="hidden md:flex items-center space-x-8">
        <NavLink href="/distribution">Distribution</NavLink>
        <NavLink href="/pricing">Pricing</NavLink>
        <NavLink href="/features">Features</NavLink>
        <NavLink href="/support">Support</NavLink>
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