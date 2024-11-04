import Link from 'next/link'
import { Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-black">
              Nexatunes
            </Link>
            <p className="mt-2 text-sm">
              Empowering artists to reach global audiences through professional music distribution.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/distribution" className="text-sm hover:text-primary transition-colors">
                Distribution
              </Link>
              <Link href="/pricing" className="text-sm hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link href="/support" className="text-sm hover:text-primary transition-colors">
                FAQ
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:info@nexatunes.com" className="text-sm hover:text-primary transition-colors">
                info@nexatunes.com
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-muted-foreground/20 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs">© 2024 Nexatunes. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <a href="https://www.gardencactusrecords.com/imprint" target='_blank' className="text-xs hover:text-primary transition-colors">
              Imprint
            </a>
            <Link target='_blank' href="https://flowery-makeup-ff7.notion.site/Impressum-und-Datenschutzerkl-rung-12fce7f8c81580e692f2e7fddb4f23da" className="text-xs hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}