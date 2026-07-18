import { motion } from 'framer-motion'
import { CONTACT } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-mint-800 text-mint-50">
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      <div className="container-x relative py-14 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl font-semibold">Gökçeada Konak Pansiyon</h3>
          <p className="mt-3 text-sm text-mint-100/80 leading-relaxed max-w-xs">
            Adanın huzurunu ve doğasını sizlerle buluşturuyoruz. Sıcak bir ev konforu için sizi bekliyoruz.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-widest uppercase text-mint-200">İletişim</h4>
          <ul className="mt-4 space-y-2 text-sm text-mint-100/90">
            <li>{CONTACT.address}</li>
            <li>
              <a href={`https://wa.me/${CONTACT.whatsappNumber}`} className="hover:text-white transition-colors" target="_blank" rel="noreferrer">
                WhatsApp: +90 531 645 43 47
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-widest uppercase text-mint-200">Bizi Takip Edin</h4>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={CONTACT.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-medium hover:bg-white/20 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            @{CONTACT.instagramHandle}
          </motion.a>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-5">
        <p className="container-x text-center text-xs text-mint-200/70">
          © {new Date().getFullYear()} Gökçeada Konak Pansiyon. Tüm hakları saklıdır.
        </p>
        <p className="container-x text-center text-xs text-mint-200/50 mt-1">
          Alcera Digital tarafından üretilmiştir.
        </p>
      </div>
    </footer>
  )
}
