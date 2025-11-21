import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Component() {
  const includedItems = [
    "Organic-style UGC content",
    "High-performing short-form video formats",
    "Full content usage rights",
    "Fast communication",
    "Reliable monthly delivery",
    "Custom packages available on request",
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <header className="w-full py-4 px-4 md:px-8 bg-white border-b border-gray-200">
        <div className="container max-w-7xl mx-auto">
          <Image
            src="/images/collinjb-logo.png"
            alt="CollinJB Media"
            width={150}
            height={150}
            className="h-28 w-auto"
          />
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-6 md:py-12 lg:py-16 flex flex-col items-center justify-center text-center space-y-6 px-4">
          <Avatar className="w-32 h-32 md:w-40 md:h-40 shadow-sm">
            <AvatarImage src="/images/profile-headshot.png" alt="Collin B." />
          </Avatar>
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Collin B.</h1>
            <p className="text-xl md:text-2xl text-gray-600">TikTok Shop UGC Creator • Sales-Driven Video Content</p>
          </div>
          <div className="flex justify-center space-x-4 pt-2">
            <Link
              href="http://tiktok.com/@meavisdeals"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              <img src="/images/tiktok-icon.png" alt="TikTok" className="h-8 w-8" />
              <span className="sr-only">TikTok</span>
            </Link>
            <Link
              href="https://www.instagram.com/collinjb_"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              <img src="/images/instagram-icon.png" alt="Instagram" className="h-8 w-8" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
          <hr className="w-40 border-t-2 border-blue-400 mt-6" />
        </section>

        {/* About me Section */}
        <section className="w-full pt-4 pb-8 md:pt-6 md:pb-10 lg:pt-8 lg:pb-12 bg-white px-4">
          <div className="container max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">About me</h2>
            <Card className="bg-gray-100 rounded-xl shadow-md p-6 md:p-8">
              <CardContent className="space-y-4 text-center">
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  I've been creating content for over eight years, and for the past five years, I've been doing it full
                  time. I started by growing my own personal accounts, posting consistently and learning what makes
                  content resonate. Before ever stepping into brand work, I built a combined reach of over 2 billion
                  views across my own content and the creator pages I helped manage.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  More recently, I've moved into the social media marketing side, focusing specifically on TikTok Shop,
                  where I've helped generate over 1.5 million dollars in revenue for brands in just 13 months. I
                  specialized in short-form video and social-first strategies that drive real results, working with over
                  30 brands to produce trust-building, conversion-focused content.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* TikTok Shop Packages Section */}
        <section className="w-full py-8 md:py-10 lg:py-12 bg-gray-50 px-4">
          <div className="container max-w-5xl mx-auto text-center space-y-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">TikTok Shop Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <Card className="bg-blue-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                <CardHeader className="flex flex-col items-center space-y-2 pt-6">
                  <span className="text-4xl">🧩</span>
                  <CardTitle className="text-2xl font-semibold text-gray-900">Starter Plan</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow justify-between text-center">
                  <div className="space-y-2 mb-6">
                    <p className="text-lg text-gray-700">10 Videos / Month</p>
                    <p className="text-3xl font-bold text-blue-600">$500</p>
                  </div>
                  <Link
                    href="mailto:collinjbbiz@gmail.com?subject=Interested%20in%20the%20Starter%20Plan%20-%20TikTok%20Shop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-auto"
                  >
                    <Button className="w-full" style={{ backgroundColor: "#000d26" }}>
                      Select Plan
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Growth Plan (moved to middle) */}
              <Card className="bg-blue-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 relative flex flex-col h-full">
                <CardHeader className="flex flex-col items-center space-y-2 pt-6">
                  <span className="absolute -top-2 right-2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md transform translate-x-1/4 -translate-y-1/4">
                    Best Value
                  </span>
                  <span className="text-4xl">📈</span>
                  <CardTitle className="text-2xl font-semibold text-gray-900">Growth Plan</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow justify-between text-center">
                  <div className="space-y-2 mb-6">
                    <p className="text-lg text-gray-700">30 Videos / Month</p>
                    <p className="text-3xl font-bold text-blue-600">$1,200</p>
                  </div>
                  <Link
                    href="mailto:collinjbbiz@gmail.com?subject=Interested%20in%20the%20Growth%20Plan%20-%20TikTok%20Shop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-auto"
                  >
                    <Button className="w-full" style={{ backgroundColor: "#000d26" }}>
                      Select Plan
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Momentum Plan (moved to end) */}
              <Card className="bg-blue-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                <CardHeader className="flex flex-col items-center space-y-2 pt-6">
                  <span className="text-4xl">⚡</span>
                  <CardTitle className="text-2xl font-semibold text-gray-900">Momentum Plan</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow justify-between text-center">
                  <div className="space-y-2 mb-6">
                    <p className="text-lg text-gray-700">20 Videos / Month</p>
                    <p className="text-3xl font-bold text-blue-600">$850</p>
                  </div>
                  <Link
                    href="mailto:collinjbbiz@gmail.com?subject=Interested%20in%20the%20Momentum%20Plan%20-%20TikTok%20Shop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-auto"
                  >
                    <Button className="w-full" style={{ backgroundColor: "#000d26" }}>
                      Select Plan
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What's Included in Every Package Section */}
        <section className="w-full py-8 md:py-10 lg:py-12 bg-white px-4">
          <div className="container max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              What's Included in Every Package
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-16">
              {includedItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 whitespace-normal">
                  <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <p className="text-base md:text-lg text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results That Speak Section */}
        <section className="w-full py-8 md:py-10 lg:py-12 bg-gray-50 px-4">
          <div className="container max-w-5xl mx-auto text-center space-y-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Results That Speak</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-red-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <img src="/images/money-wings-icon-green.gif" alt="Money with Wings" className="h-12 w-12" />
                  <p className="text-4xl font-bold text-gray-900">$1.5M+</p>
                  <p className="text-lg text-gray-700">GMV Generated</p>
                </CardContent>
              </Card>
              <Card className="bg-orange-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <img src="/images/clapper-icon.gif" alt="Film Clapperboard" className="h-12 w-12" />
                  <p className="text-4xl font-bold text-gray-900">200M+</p>
                  <p className="text-lg text-gray-700">Total Views</p>
                </CardContent>
              </Card>
              <Card className="bg-blue-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <img src="/images/handshake-icon.gif" alt="Handshake" className="h-12 w-12" />
                  <p className="text-4xl font-bold text-gray-900">17+</p>
                  <p className="text-lg text-gray-700">Brands Scaled</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* CTA Footer */}
      <footer className="w-full py-8 md:py-10 lg:py-12 text-white px-4" style={{ backgroundColor: "#000d26" }}>
        <div className="container max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-lg md:text-xl font-bold tracking-tight">
            If you're looking for a creator who understands TikTok Shop and can consistently deliver videos that drive
            results... let's work together.
          </h2>
          <div className="space-y-2">
            <Link
              href="mailto:collinjbbiz@gmail.com"
              className="inline-flex items-center justify-center text-xl md:text-2xl font-semibold text-white hover:underline"
            >
              <img src="/images/envelope-icon.png" alt="Email" className="h-6 w-6 mr-2" />
              collinjbbiz@gmail.com
            </Link>
            <p className="text-gray-400 text-lg">Replies within 24 hours</p>
          </div>
          <p className="text-gray-400 text-sm pt-4">© 2025 CollinJB LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
