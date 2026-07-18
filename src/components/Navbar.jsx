import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { to: '/', label: 'Ana Sayfa' },
  { to: '/galeri', label: 'Konak Galeri' },
  { to: '/gezilecek-yerler', label: 'Gezilecek Yerler' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-sand-50/90 backdrop-blur-md shadow-soft' : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex items-center justify-between py-4">
        <NavLink to="/" className="flex items-center gap-2 font-display text-xl font-semibold text-mint-800">
          Konak Pansiyon
        </NavLink>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-mint-600 ${
                  isActive ? 'text-mint-700' : 'text-mint-900/70'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a href="#rezervasyon" className="btn-primary">
            Rezervasyon Yap
          </a>
        </div>

        <button
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full text-mint-700 ring-1 ring-mint-200"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menüyü aç/kapat"
        >
          <motion.span animate={{ rotate: menuOpen ? 45 : 0 }} className="block h-0.5 w-5 bg-mint-700 relative">
            <motion.span
              animate={{ rotate: menuOpen ? -90 : 0, opacity: menuOpen ? 0 : 1 }}
              className="absolute -top-2 left-0 h-0.5 w-5 bg-mint-700"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -90 : 0 }}
              className="absolute top-2 left-0 h-0.5 w-5 bg-mint-700"
            />
          </motion.span>
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-sand-50/95 backdrop-blur-md shadow-soft"
          >
            <div className="container-x flex flex-col gap-4 py-6">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium text-mint-800"
                >
                  {link.label}
                </NavLink>
              ))}
              <a href="#rezervasyon" onClick={() => setMenuOpen(false)} className="btn-primary w-full">
                Rezervasyon Yap
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
