import { motion } from 'framer-motion'

const ITEMS = [
  { title: 'Doğayla İç İçe', desc: 'Yeşilliklerle çevrili sakin bir bahçe ve teras.', icon: '🌿' },
  { title: 'Aileye Uygun Konfor', desc: 'Mutfaklı apart seçenekleriyle ev sıcaklığı.', icon: '🏡' },
  { title: 'Merkeze Yakın', desc: "Gökçeada'nın gezilecek yerlerine kısa mesafe.", icon: '📍' },
  { title: 'Anında Rezervasyon', desc: 'WhatsApp üzerinden hızlı ve kolay iletişim.', icon: '💬' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Highlights() {
  return (
    <section className="py-16">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {ITEMS.map((it) => (
          <motion.div
            key={it.title}
            variants={item}
            whileHover={{ y: -6 }}
            className="card-surface p-6 text-center"
          >
            <div className="text-3xl">{it.icon}</div>
            <h3 className="mt-3 font-display text-lg font-semibold text-mint-800">{it.title}</h3>
            <p className="mt-2 text-sm text-mint-900/70">{it.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
