import { motion } from 'framer-motion'
import { CONTACT } from '../data/siteData'

export default function MapSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-eyebrow">Nasıl Ulaşılır</span>
          <h2 className="section-title mt-3">Konumumuz</h2>
          <p className="mt-4 text-mint-900/70 max-w-md">{CONTACT.address}</p>
          <a
            href={CONTACT.mapsLink}
            target="_blank"
            rel="noreferrer"
            className="btn-outline mt-6"
          >
            Google Haritalar'da Aç
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-3xl shadow-soft ring-1 ring-mint-100 h-80 sm:h-96"
        >
          <iframe
            title="Gökçeada Konak Pansiyon Konumu"
            src={CONTACT.mapsEmbedSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  )
}
