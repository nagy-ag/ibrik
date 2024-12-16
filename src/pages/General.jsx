import { useState } from 'react'
import { Link } from 'react-router-dom'
import Spline from '@splinetool/react-spline'

function General() {
  const [email, setEmail] = useState('')
  const [subscribeStatus, setSubscribeStatus] = useState('')
  const [activeQuestion, setActiveQuestion] = useState(null)

  const handleSubscribe = (e) => {
    e.preventDefault()
    setSubscribeStatus('success')
    setEmail('')
  }

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index)
  }

  return (
    <div className="relative min-h-screen text-white">
      {/* Fixed Background Container */}
      <div className="fixed inset-0 w-full h-full">
        {/* Spline Animation */}
        <div className="absolute inset-0 scale-150 md:scale-125 translate-y-[-10%] md:translate-y-[-5%] transform-gpu">
          <Spline scene="https://prod.spline.design/kj8HECVEw072g6pQ/scene.splinecode" />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      </div>

      {/* Scrollable Content */}
      <div className="relative z-20">
        {/* Navigation */}
        <div className="container mx-auto px-4 py-6">
          <Link to="/" className="inline-flex items-center text-white hover:text-brand-cta transition-all duration-300 transform hover:scale-105">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            
          </Link>
        </div>

        {/* Product Features */}
        <section className="py-6">
          <div className="container mx-auto p-4">
            <h2 className="text-2xl md:text-3xl font-logo text-center mb-3 text-white">
              IBRIK BÖGRÉK
            </h2>
            <p className="text-base md:text-lg font-logo text-center mb-6 text-white">
              Egyedi tervezésű bögrék, amelyek tökéletesen illenek minden munkahelyre és csapathoz
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { img: "mug01.png", title: "Egyedi Tervezés" },
                { img: "mug02.png", title: "Prémium Minőség" },
                { img: "mug03.png", title: "Gyors Szállítás" }
              ].map((item, index) => (
                <div key={index} className="group flex flex-col items-center transform transition-all duration-500 hover:translate-y-[-10px]">
                  <div className="aspect-[3/4] w-full bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:bg-white/10">
                    <img src={`src/assets/${item.img}`} alt={item.title} className="w-full h-full object-contain p-3" />
                  </div>
                  <h3 className="text-lg font-logo mt-4 text-white group-hover:text-brand-cta transition-colors duration-300">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Targeted Messages Section */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-logo text-center mb-3 text-white">
              Miért válasszon minket?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl mx-auto">
              {[
                {
                  title: "Startupoknak",
                  desc: "Fiatal vállalkozásoknak tökéletes megoldás csapatépítésre és márkaépítésre"
                },
                {
                  title: "Nagyvállalatoknak",
                  desc: "Professzionális megoldások nagy mennyiségben, egyedi igényekre szabva"
                },
                {
                  title: "Eseményekre",
                  desc: "Konferenciák és céges események különleges ajándéktárgyai"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-3 rounded-xl transform transition-all duration-300 hover:scale-105 hover:bg-white/15">
                  <h3 className="text-lg md:text-xl font-logo mb-2 text-white">{item.title}</h3>
                  <p className="text-sm font-logo text-white">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-logo text-center mb-3 text-white">
              Amit ügyfeleink mondanak
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl mx-auto">
              {[
                {
                  quote: "A bögrék fantasztikusak lettek! Minden kollégám imádja, és remekül illenek az irodai környezetbe.",
                  name: "Kiss Anna",
                  role: "Marketing Manager"
                },
                {
                  quote: "Gyors és professzionális szolgáltatás. A minőség kifogástalan, mindenkinek ajánlom!",
                  name: "Nagy Péter",
                  role: "CEO"
                },
                {
                  quote: "Az egyedi tervezésű bögrék tökéletes ajándéknak bizonyultak a csapatunk számára.",
                  name: "Kovács Júlia",
                  role: "HR Director"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-3 rounded-xl transform transition-all duration-300 hover:scale-105 hover:bg-white/15">
                  <p className="text-sm font-logo mb-2 text-white">{testimonial.quote}</p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                    <div>
                      <p className="text-sm font-logo text-white">{testimonial.name}</p>
                      <p className="text-xs font-logo text-white">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-6">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-logo text-center mb-3 text-white">
              Gyakori kérdések
            </h2>
            <div className="space-y-2">
              {[
                {
                  question: "Milyen anyagból készülnek a bögrék?",
                  answer: "Prémium minőségű kerámiából, amely mosogatógépben is tisztítható és mikrohullámú sütőben is használható."
                },
                {
                  question: "Mennyi a szállítási idő?",
                  answer: "Általában 3-5 munkanap, de nagyobb rendelések esetén ez változhat."
                },
                {
                  question: "Van minimum rendelési mennyiség?",
                  answer: "Nem, akár egyetlen bögrét is rendelhet még ma."
                },
                {
                  question: "Milyen fizetési módokat fogadnak el?",
                  answer: "Banki átutalás, online bankkártyás vagy készpénzes fizetés szállításkor."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:bg-white/15">
                  <button
                    className="w-full p-3 text-left font-logo flex justify-between items-center"
                    onClick={() => toggleQuestion(index)}
                  >
                    <span className="text-white">{faq.question}</span>
                    <span className="transform transition-transform text-white">
                      ▼
                    </span>
                  </button>
                  {activeQuestion === index && (
                    <div className="p-3 pt-0 font-logo text-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Christmas Special */}
        <section className="py-8">
          <div className="container mx-auto p-4">
            <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 transform transition-all duration-300 hover:scale-105 hover:bg-white/10">
              <h2 className="text-xl md:text-2xl font-logo mb-3 text-white">Karácsonyi Céges Akció</h2>
              <p className="text-base md:text-lg font-logo mb-4 text-white">
                Rendeljen december 21-ig garantált karácsonyi kiszállítással
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-3">
                <button className="bg-brand-cta text-white px-8 py-4 rounded-2xl font-logo text-lg transition-all duration-300 transform hover:scale-105 hover:bg-red-700">
                  Akciós Ajánlat
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-logo text-lg transition-all duration-300 transform hover:scale-105 hover:bg-white/20">
                  Részletek
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-6">
          <div className="container mx-auto px-4 max-w-xl text-center">
            <h2 className="text-2xl md:text-3xl font-logo mb-3 text-white">
              Iratkozz fel hírlevelünkre
            </h2>
            <p className="text-base md:text-lg font-logo mb-4 text-white">
              Értesülj elsőként az akciókról és újdonságokról
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email címed"
                className="flex-1 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white font-logo transition-all duration-300 focus:scale-105 focus:bg-white/15"
                required
              />
              <button
                type="submit"
                className="bg-brand-cta text-white px-8 py-2 rounded-xl font-logo transition-all duration-300 transform hover:scale-105 hover:bg-red-700"
              >
                Feliratkozás
              </button>
            </form>
            {subscribeStatus === 'success' && (
              <p className="text-green-400 mt-2 font-logo">Sikeres feliratkozás!</p>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/20 backdrop-blur-sm text-white border-t border-white/10">
          <div className="container mx-auto p-4">
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <h3 className="text-xl font-logo mb-3 text-white">ibrik.</h3>
                <p className="text-sm font-logo text-white">
                  Egyedi tervezésű bögrék minden alkalomra
                </p>
              </div>
              <div>
                <h4 className="text-lg font-logo mb-2 text-white">Kapcsolat</h4>
                <ul className="space-y-1 text-sm font-logo text-white">
                  <li>info@ibrik.ro</li>
                  <li>+40 71 234 567</li>
                  <li>Kolozsvár, Románia</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-logo mb-2 text-white">Információk</h4>
                <ul className="space-y-1 text-sm font-logo text-white">
                  <li>GYIK</li>
                  <li>Szállítás</li>
                  <li>Garancia</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-logo mb-2 text-white">Kövess minket</h4>
                <ul className="space-y-1 text-sm font-logo text-white">
                  <li>Facebook</li>
                  <li>Instagram</li>
                  <li>LinkedIn</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 text-center text-sm font-logo text-white">
              2025 ibrik. Copyright.
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default General