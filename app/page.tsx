"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import MediaKit from "./media-kit"
import { ChevronDown } from "lucide-react"

export default function LandingPage() {
  const [showMediaKit, setShowMediaKit] = useState(false)
  const [showMoreVideos, setShowMoreVideos] = useState(false)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://www.tiktok.com/embed.js"
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  if (showMediaKit) {
    return <MediaKit />
  }

  const topVideos = [
    "7494002922666200363",
    "7377132943996669230",
    "7547492420816997645",
    "7563784946628791566",
    "7565549716608404791",
  ]

  return (
    <div
      className="flex flex-col min-h-screen text-white relative overflow-hidden"
      style={{ backgroundColor: "#000d26" }}
    >
      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center px-4 py-12">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="flex justify-center mb-8">
            <img src="/images/collinjb-logo-banner.png" alt="CollinJB Media" className="h-40 md:h-52 w-auto" />
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Driving <span style={{ color: "#00cdfe" }}>$1.7M+</span> in Product Sales
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-normal">
            I create sales-driven short form content that turns views into revenue for brands.
          </p>

          <div className="pt-4">
            <Button
              onClick={() => setShowMediaKit(true)}
              size="lg"
              className="text-lg px-12 py-6 rounded-full font-bold text-black hover:scale-105 transition-transform duration-200"
              style={{
                backgroundColor: "#00cdfe",
                boxShadow: "0 6px 12px rgba(0, 205, 254, 0.3), 0 0 0 2px white",
              }}
            >
              View Media Kit
            </Button>
          </div>
        </div>

        {/* Top Performing Section */}
        <div className="w-full max-w-6xl mx-auto mt-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">Top Performing Videos</h2>
          
          {/* Top Row - 3 videos */}
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {topVideos.slice(0, 3).map((videoId) => (
              <div key={videoId} className="w-full sm:w-[300px]">
                <iframe
                  src={`https://www.tiktok.com/embed/v2/${videoId}`}
                  className="w-full aspect-[9/16] rounded-lg"
                  allow="autoplay; encrypted-media"
                  style={{ border: 0 }}
                />
              </div>
            ))}
          </div>
          
          {/* Bottom Row - 2 videos centered */}
          <div className="flex flex-wrap justify-center gap-4">
            {topVideos.slice(3, 5).map((videoId) => (
              <div key={videoId} className="w-full sm:w-[300px]">
                <iframe
                  src={`https://www.tiktok.com/embed/v2/${videoId}`}
                  className="w-full aspect-[9/16] rounded-lg"
                  allow="autoplay; encrypted-media"
                  style={{ border: 0 }}
                />
              </div>
            ))}
          </div>

          
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-400 text-sm">
        © 2025 CollinJB LLC. All rights reserved.
      </footer>
    </div>
  )
}
