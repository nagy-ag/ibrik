import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Spline from '@splinetool/react-spline'
import General from './pages/General'

function App() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft() {
    const targetDate = new Date('2024-12-21T00:00:00')
    const now = new Date()
    const difference = targetDate.getTime() - now.getTime()

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <main className="overflow-hidden">
            <div className="min-h-screen bg-brand-primary overflow-hidden">
              {/* Hero Section */}
              <section className="relative min-h-screen bg-brand-primary text-white overflow-hidden">
                {/* Spline Animation Background */}
                <div className="absolute inset-0 scale-[1.75] md:scale-100 translate-y-[15%] md:translate-y-0 translate-x-[-8%] md:translate-x-0">
                  <Spline 
                    className="w-full h-full"
                    scene="https://prod.spline.design/umpu1P7JlJ5g-4Kr/scene.splinecode" 
                  />
                </div>
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/10"></div>
                
                {/* Statistics and Social Proof in Top Left */}
                <div className="absolute top-4 left-4 md:top-8 md:left-8">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-4 w-[100%] pb-4 border-b border-white/10">
                        <div className="flex items-baseline">
                          <div className="text-xl md:text-2xl font-logo text-white">24</div>
                          <div className="text-xl md:text-2xl font-logo text-brand-cta">/</div>
                          <div className="text-xl md:text-2xl font-logo text-white">7</div>
                        </div>
                        <div className="text-xs md:text-sm font-logo text-white/80">kiemelkedő ügyfélszolgálat minden rendeléshez</div>
                      </div>
                      <div className="flex items-baseline gap-4 w-[95%] py-4 border-b border-white/10">
                        <div className="flex items-baseline">
                          <div className="text-xl md:text-2xl font-logo text-white">15k</div>
                          <div className="text-xl md:text-2xl font-logo text-brand-cta">+</div>
                        </div>
                        <div className="text-xs md:text-sm font-logo text-white/80 whitespace-nowrap">kézműves bögrénk talált otthonra világszerte</div>
                      </div>
                      <div className="flex items-baseline gap-4 w-[90%] py-4 border-b border-white/10">
                        <div className="flex items-baseline">
                          <div className="text-xl md:text-2xl font-logo text-white">500</div>
                          <div className="text-xl md:text-2xl font-logo text-brand-cta">+</div>
                        </div>
                        <div className="text-xs md:text-sm font-logo text-white/80">elégedett csapat választott már minket</div>
                      </div>
                      <div className="flex items-baseline gap-4 w-[85%] pt-4">
                        <div className="flex items-baseline">
                          <div className="text-xl md:text-2xl font-logo text-white">98</div>
                          <div className="text-xl md:text-2xl font-logo text-brand-cta">%</div>
                        </div>
                        <div className="text-xs md:text-sm font-logo text-white/80">vásárlói elégedettség – prémium minőség</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Top Right CTAs */}
                <div className="absolute top-4 right-4 md:top-2 md:right-8 flex flex-col items-end gap-4 md:gap-4">
                  <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
                    <Link
                      to="/general"
                      className="bg-white/10 backdrop-blur-sm text-white px-4 md:px-8 py-2 md:py-2.5 rounded-xl font-logo text-sm md:text-base transition-all duration-300 transform hover:scale-105 hover:bg-white/20"
                    >
                      Rólunk és a termékeinkről
                    </Link>
                    <button className="bg-brand-cta text-white px-4 md:px-8 py-2 md:py-2.5 rounded-xl font-logo text-sm md:text-base transition-all duration-300 transform hover:scale-105 hover:bg-red-700">
                      Ne Maradj Le Róla!
                    </button>
                  </div>
                  
                  <div className="bg-white/10 px-4 md:px-6 py-0.5 rounded-lg border border-white/30 mt-2 w-[85%] ml-auto">
                    <div className="flex justify-between items-center">
                      <div className="text-center flex-1">
                        <div className="text-sm md:text-base font-logo text-white leading-none">{timeLeft.days}</div>
                        <div className="text-[10px] md:text-xs font-logo text-white/80 leading-none">Nap</div>
                      </div>
                      <div className="text-center flex-1">
                        <div className="text-sm md:text-base font-logo text-white leading-none">{timeLeft.hours}</div>
                        <div className="text-[10px] md:text-xs font-logo text-white/80 leading-none">Óra</div>
                      </div>
                      <div className="text-center flex-1">
                        <div className="text-sm md:text-base font-logo text-white leading-none">{timeLeft.minutes}</div>
                        <div className="text-[10px] md:text-xs font-logo text-white/80 leading-none">Perc</div>
                      </div>
                      <div className="text-center flex-1">
                        <div className="text-sm md:text-base font-logo text-white leading-none">{timeLeft.seconds}</div>
                        <div className="text-[10px] md:text-xs font-logo text-white/80 leading-none">Mp</div>
                      </div>
                      
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-white text-xs md:text-sm">
                    <div className="bg-white/10 px-2 md:px-3 py-0.5 md:py-1 rounded-full border border-white/30 font-logo">Ünnepi Akció</div>
                    <div className="font-logo">15% kedvezmény 15 bögre felett</div>
                  </div>
                </div>

                
              </section>
            </div>
          </main>
        } />
        <Route path="/general" element={<General />} />
      </Routes>
    </Router>
  )
}

export default App
