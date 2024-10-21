'use client'

import { FC, useState, useEffect } from 'react'
import { Music, Settings, FileText, DollarSign, HeadphonesIcon, Youtube, Shield, CheckCircle, Disc, Radio, Film, Percent } from 'lucide-react'

interface FeatureProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

const Feature: FC<FeatureProps> = ({ icon, title, description, index }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, index * 100) // Stagger the animation

    return () => clearTimeout(timer)
  }, [index])

  return (
    <div
      className={`flex items-start space-x-4 p-6 border border-gray-300 bg-white rounded-lg shadow-sm transition-all duration-500 hover:shadow-md transform hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="flex-shrink-0 text-primary">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  )
}

const DistributionPage: FC = () => {
  const features = [
    {
      icon: <Music size={24} />,
      title: "Global Digital Distribution",
      description: "Reach millions of listeners worldwide through all major streaming platforms and digital stores."
    },
    {
      icon: <Settings size={24} />,
      title: "Cutting-edge Analytics",
      description: "Gain valuable insights with our state-of-the-art analytics tools to optimize your music career."
    },
    {
      icon: <FileText size={24} />,
      title: "Transparent Reporting",
      description: "Access clear, comprehensive monthly statements detailing your earnings across all platforms."
    },
    {
      icon: <DollarSign size={24} />,
      title: "Instant Payouts",
      description: "Enjoy immediate access to your earnings without any minimum payout thresholds."
    },
    {
      icon: <HeadphonesIcon size={24} />,
      title: "Dedicated Support",
      description: "Receive personalized assistance from our team of experienced music industry professionals."
    },
    {
      icon: <Youtube size={24} />,
      title: "YouTube Monetization",
      description: "Maximize your revenue by monetizing your music on YouTube, including user-generated content."
    },
    {
      icon: <Shield size={24} />,
      title: "Rights Management",
      description: "Protect your intellectual property with our robust rights management and tracking system."
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Quality Assurance",
      description: "Ensure your releases meet the highest industry standards with our thorough quality checks."
    },
    {
      icon: <Disc size={24} />,
      title: "Beatport Optimization",
      description: "Maximize your presence in the electronic music market with optimized Beatport distribution."
    },
    {
      icon: <Radio size={24} />,
      title: "Promotional Opportunities",
      description: "Boost your visibility through our curated playlists, promotional campaigns, and partner networks."
    },
    {
      icon: <Film size={24} />,
      title: "Sync Licensing",
      description: "Open new revenue streams with sync licensing opportunities for film, TV, and commercials."
    },
    {
      icon: <Percent size={24} />,
      title: "100% Revenue Keep",
      description: "Keep 100% of your royalties with our fee-free distribution service, maximizing your earnings."
    }
  ]

  return (
    <div className="min-h-screen bg-white from-gray-50 to-gray-100">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4 animate-fade-in-down">Distribution Features</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up">
          Empower your music career with our comprehensive suite of distribution services and tools.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default DistributionPage