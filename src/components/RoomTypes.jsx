import { useState } from 'react'
import { motion } from 'framer-motion'
import { ROOM_TYPES } from '../data/siteData'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' },
  }),
}

function RoomCard({ room, index }) {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="card-surface overflow-hidden"
    >
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <motion.img
          key={activeImage}
          initial={{ opacity: 0.4, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src={room.images[activeImage]}
          alt={room.label}
          className="h-full w-full object-cover"
        />
        <div className="absolute top-4 left-4 rounded-full bg-white/85 px-4 py-1 text-xs font-semibold tracking-wide text-mint-700 uppercase">
          {room.tagline}
        </div>

        {room.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {room.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                aria-label={`Görsel ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === activeImage ? 'w-6 bg-white' : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-6 sm:p-8">
        <h3 className="font-display text-2xl font-semibold text-mint-800">{room.label}</h3>
        <p className="mt-3 text-sm text-mint-900/70 leading-relaxed">{room.description}</p>

        <ul className="mt-5 grid grid-cols-2 gap-2">
          {room.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-xs text-mint-700">
              <span className="h-1.5 w-1.5 rounded-full bg-mint-500" />
              {feature}
            </li>
          ))}
        </ul>

        <a href="#rezervasyon" className="btn-primary mt-6 w-full">
          {room.label} için Rezervasyon
        </a>
      </div>
    </motion.div>
  )
}

export default function RoomTypes() {
  return (
    <section id="odalar" className="py-20 sm:py-28">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <span className="section-eyebrow">Konaklama Seçenekleri</span>
          <h2 className="section-title mt-3">Oda Tipleri</h2>
          <p className="mt-4 text-mint-900/70">
            İhtiyacınıza en uygun konaklama deneyimini seçin; sade bir oda ya da mutfaklı bağımsız bir yaşam alanı.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {ROOM_TYPES.map((room, i) => (
            <RoomCard key={room.id} room={room} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
