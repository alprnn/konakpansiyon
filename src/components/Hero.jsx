import { motion } from 'framer-motion'
import heroImage from '../assets/gallery/hero-cove.jpg'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Gökçeada Konak Pansiyon" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-mint-900/40 via-mint-900/30 to-sand-50" />
      </div>

      <div className="container-x relative z-10 grid gap-10 py-20 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="section-eyebrow bg-white/80 rounded-full px-4 py-1 text-mint-700">
            Gökçeada · Yenibademli
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white drop-shadow-sm">
            Adanın Huzurunda <br /> Bir Konak Deneyimi
          </h1>
          <p className="mt-6 max-w-md text-base sm:text-lg text-white/90">
            Ferah odalar, doğaya açılan teraslar ve samimi bir ev sıcaklığıyla Gökçeada Konak Pansiyon'a hoş geldiniz.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#rezervasyon"
              className="btn-primary"
            >
              Hemen Rezervasyon Yap
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#odalar"
              className="btn-outline bg-white/70"
            >
              Odaları İncele
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/80"
      >
        <span className="text-xs tracking-widest uppercase">Kaydır</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="h-6 w-px bg-white/70"
        />
      </motion.div>
    </section>
  )
}
