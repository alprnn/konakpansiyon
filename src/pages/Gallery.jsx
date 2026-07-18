import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GALLERY_IMAGES } from '../data/siteData'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
}

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="pt-32 pb-24">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <span className="section-eyebrow">Konak Pansiyon</span>
          <h1 className="section-title mt-3">Konak Galeri</h1>
          <p className="mt-4 text-mint-900/70">
            Pansiyonumuzun teras, ortak alan ve genel atmosferinden kareler.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]"
        >
          {GALLERY_IMAGES.map((img, i) => (
            <motion.button
              key={i}
              variants={item}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelected(img)}
              className="mb-5 block w-full overflow-hidden rounded-2xl shadow-soft ring-1 ring-mint-100"
            >
              <img src={img.src} alt={img.alt} className="w-full object-cover" loading="lazy" />
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-mint-900/90 p-6 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selected.src}
              alt={selected.alt}
              className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
