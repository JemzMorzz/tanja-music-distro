import Link from 'next/link'
import { ArrowRight, Music, Globe, BarChart, DollarSign, LayoutList, HeadphonesIcon } from 'lucide-react'
import { ReactNode } from 'react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col overflow-x-hidden">
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

      <main className="flex-grow">
        <section className="relative bg-transparent text-white w-full flex items-center min-h-screen text-center">
          <div className="absolute top-0 left-0 w-screen h-full overflow-hidden z-0">
            <video
              className="w-full h-full object-cover object-center blur-[3px] scale-110"
              src="/landing-background.mp4"
              autoPlay
              loop
              muted
              playsInline
            ></video>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
          </div>
          <div className="relative z-20 px-4 w-full h-full">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Distribute Your Music Globally</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Reach millions of listeners worldwide with Nexatunes' professional music distribution services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/signup"
                className="inline-flex items-center px-6 py-3 bg-zinc-900 text-white rounded-md hover:bg-zinc-900/90 transition-colors text-lg"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center px-6 py-3 bg-gray-100 text-zinc-900 rounded-md hover:bg-gray-100/90 transition-colors text-lg"
              >
                View Pricing <DollarSign className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Nexatunes?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Music className="h-10 w-10 text-primary" />}
                title="Wide Distribution"
                description="Get your music on all major streaming platforms and digital stores."
              />
              <FeatureCard
                icon={<Globe className="h-10 w-10 text-primary" />}
                title="Global Reach"
                description="Access listeners from around the world and expand your fanbase."
              />
              <FeatureCard
                icon={<BarChart className="h-10 w-10 text-primary" />}
                title="Analytics"
                description="Track your performance with detailed analytics and insights."
              />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Artists Say About Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <TestimonialCard
                quote="Nexatunes has been a game-changer for my music career. Their global reach is unparalleled!"
                author="Sarah J., Independent Artist"
              />
              <TestimonialCard
                quote="As a label, we appreciate the detailed analytics and professional support Nexatunes provides."
                author="John D., Record Label Owner"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Nexatunes. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" target='_blank' href="https://www.gardencactusrecords.com/imprint">
            Imprint
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </a>
        </nav>
      </footer>
    </div>
  )
}

interface NavLinkProps {
  href: string
  children: ReactNode
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link href={href} className="text-gray-500 hover:text-zinc-900 transition-colors">
      {children}
    </Link>
  )
}

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

interface TestimonialCardProps {
  quote: string
  author: string
}

function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <p className="italic mb-4">"{quote}"</p>
      <p className="font-semibold text-right">- {author}</p>
    </div>
  )
}