import { motion } from 'framer-motion'
import { PLACES_TO_VISIT } from '../data/siteData'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function PlacesToVisit() {
  return (
    <section className="pt-32 pb-24">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <span className="section-eyebrow">Gökçeada'yı Keşfedin</span>
          <h1 className="section-title mt-3">Gezilecek Yerler</h1>
          <p className="mt-4 text-mint-900/70">
            Konak Pansiyon'dan yaklaşık sürüş mesafeleriyle adanın öne çıkan duraklarını sizin için listeledik.
            <br className="hidden sm:block" />
            <span className="text-xs text-mint-500">
              (Mesafeler tahmini olup güzergaha göre değişebilir.)
            </span>
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PLACES_TO_VISIT.map((place) => (
            <motion.div
              key={place.name}
              variants={item}
              whileHover={{ y: -6 }}
              className="card-surface p-6 flex flex-col"
            >
              <h3 className="font-display text-xl font-semibold text-mint-800">{place.name}</h3>
              <p className="mt-2 flex-1 text-sm text-mint-900/70 leading-relaxed">{place.description}</p>

              <div className="mt-5 flex items-center gap-4 border-t border-mint-100 pt-4 text-sm text-mint-700">
                <span className="flex items-center gap-1.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                  ~{place.distanceKm} km
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 3" />
                  </svg>
                  ~{place.driveMinutes} dk
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
