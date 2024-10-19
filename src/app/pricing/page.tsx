import Link from 'next/link'
import { CheckIcon } from 'lucide-react'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Nexatunes
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
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

      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <PricingCard
            title="Basic Plan"
            price="$9.99"
            period="per month"
            features={[
              "Distribution to major platforms",
              "Basic analytics",
              "Email support",
              "Up to 2 releases per year",
            ]}
            ctaText="Get Started"
            ctaLink="/signup?plan=basic"
          />
          <PricingCard
            title="Pro Plan"
            price="$19.99"
            period="per month"
            features={[
              "Everything in Basic",
              "Advanced analytics",
              "Priority email support",
              "Unlimited releases",
              "Custom release scheduling",
            ]}
            ctaText="Go Pro"
            ctaLink="/signup?plan=pro"
            highlighted={true}
          />
          <PricingCard
            title="Enterprise Plan"
            price="Custom"
            period="contact for pricing"
            features={[
              "Everything in Pro",
              "Dedicated account manager",
              "Phone and email support",
              "Custom integrations",
              "Marketing support",
            ]}
            ctaText="Contact Sales"
            ctaLink="/contact"
          />
        </div>
      </main>

      <footer className="bg-primary text-primary-foreground py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <NavLink href="/pricing">Pricing</NavLink>
            <NavLink href="/features">Features</NavLink>
            <NavLink href="/support">Support</NavLink>
          </div>
          <p>&copy; 2023 Nexatunes. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

type NavLinkProps = {
  href: string
  children: React.ReactNode
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link href={href} className="text-muted-foreground hover:text-foreground transition-colors">
      {children}
    </Link>
  )
}

type PricingCardProps = {
  title: string
  price: string
  period: string
  features: string[]
  ctaText: string
  ctaLink: string
  highlighted?: boolean
}

function PricingCard({ title, price, period, features, ctaText, ctaLink, highlighted = false }: PricingCardProps) {
  return (
    <div className={`rounded-lg p-6 h-full ${highlighted ? 'bg-zinc-900 text-white shadow-lg' : 'bg-white border border-muted'}`}>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="mb-4">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-sm ml-2">{period}</span>
      </div>
      <ul className="mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckIcon className="h-5 w-5 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href={ctaLink}
        className={`block w-full text-center py-2 px-4 rounded-md transition-colors ${
          highlighted
            ? 'bg-white text-black hover:bg-muted'
            : 'bg-zinc-900 text-white hover:bg-primary/90'
        }`}
      >
        {ctaText}
      </Link>
    </div>
  )
}