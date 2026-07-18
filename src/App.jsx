import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import PlacesToVisit from './pages/PlacesToVisit'
import { CONTACT } from './data/siteData'

function WhatsappFab() {
  return (
    <a
      href={`https://wa.me/${CONTACT.whatsappNumber}`}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-mint-600 text-white shadow-soft transition-transform hover:scale-110 active:scale-95"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.14c-.24.68-1.4 1.3-1.93 1.37-.5.08-1.12.11-1.8-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.17-1.56-1.17-2.97 0-1.42.74-2.11 1-2.4.26-.29.57-.36.76-.36h.55c.18 0 .42-.03.65.5.24.55.82 1.94.9 2.08.07.14.12.3.02.49-.1.19-.15.3-.29.46-.14.16-.3.36-.43.48-.14.14-.29.29-.13.57.17.29.75 1.24 1.62 2.01 1.11.99 2.04 1.3 2.33 1.44.29.14.46.12.63-.07.17-.19.72-.84.92-1.13.19-.29.38-.24.64-.14.26.1 1.65.78 1.93.92.29.14.48.21.55.33.07.12.07.68-.17 1.36Z" />
      </svg>
    </a>
  )
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeri" element={<Gallery />} />
          <Route path="/gezilecek-yerler" element={<PlacesToVisit />} />
        </Routes>
      </main>
      <Footer />
      <WhatsappFab />
    </div>
  )
}
