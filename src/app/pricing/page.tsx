'use client'
import Link from 'next/link'
import { CheckIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import ContactForm from '@/components/ContactForm'

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      title: "Label Basic",
      monthlyPrice: "€0.00",
      yearlyPrice: "€0.00",
      features: [
        "Distribution to most major platforms",
        "Basic analytics",
        "Unlimited Artists",
        "Unlimited releases",
        "Unlimited Sublabels",
        "FAQ, Email support 72h",
      ],
      ctaText: "Get Started",
      ctaLink: "/signup?plan=basic",
    },
    {
      title: "Label Pro",
      monthlyPrice: "€24.99",
      yearlyPrice: "€249.99",
      features: [
        "Everything in Label Basic",
        "Including Beatport / Traxsource",
        "Advanced analytics",
        "Fastlane",
        "Product Insurance",
        "Advanced Email Support 48h"
        ,
      ],
      ctaText: "Go Pro",
      ctaLink: "/signup?plan=pro",
      highlighted: true,
    },
    {
      title: "Label Enterprise",
      monthlyPrice: "€49.99",
      yearlyPrice: "€499.99",
      features: [
        "Everything in Label Pro",
        "Fastlane plus",
        "Product Insurance plus",
        "Support Level: Label Manager",
        "and more"
      ],
      ctaText: "Contact Sales",
      ctaLink: "/contact",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-6">Pricing</h1>
        <div className="flex justify-center items-center mb-12">
          <span className={`mr-2 ${isYearly ? 'text-gray-500' : 'font-semibold'}`}>Monthly</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none 
            peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
            rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full 
            peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
            after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full 
            after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
          <span className={`ml-2 ${isYearly ? 'font-semibold' : 'text-gray-500'}`}>Yearly</span>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={isYearly ? plan.yearlyPrice : plan.monthlyPrice}
              period={isYearly ? "per year" : "per month"}
              features={plan.features}
              ctaText={plan.ctaText}
              ctaLink={plan.ctaLink}
              highlighted={plan.highlighted}
              index={index}
            />
          ))}
        </div>
      </main>
    </div>
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
  index: number;
}

function PricingCard({ title, price, period, features, ctaText, ctaLink, highlighted = false, index }: PricingCardProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, index * 100) // Stagger the animation

    return () => clearTimeout(timer)
  }, [index])
  return (
    <div
      className={`flex flex-col transition-all duration-500 rounded-lg p-6 h-full shadow-md ${
        highlighted ? 'bg-zinc-900 text-white shadow-lg' : 'bg-white border border-gray-300 border-muted'
      } ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="flex-grow">
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
      </div>
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