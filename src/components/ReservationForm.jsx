import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import {
  setRoomType,
  setGuestCount,
  setCheckIn,
  setCheckOut,
} from '../store/reservationSlice'
import { ROOM_TYPES } from '../data/siteData'
import { buildWhatsappUrl } from '../utils/whatsapp'

const todayIso = () => new Date().toISOString().split('T')[0]

export default function ReservationForm() {
  const dispatch = useDispatch()
  const reservation = useSelector((state) => state.reservation)
  const { roomType, guestCount, checkIn, checkOut } = reservation

  const isValid = useMemo(() => {
    if (!checkIn || !checkOut) return false
    return new Date(checkOut) > new Date(checkIn)
  }, [checkIn, checkOut])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isValid) return
    const url = buildWhatsappUrl(reservation)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="rezervasyon" className="py-20 sm:py-28 bg-mint-50/60">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <span className="section-eyebrow">Kolay & Hızlı</span>
          <h2 className="section-title mt-3">Rezervasyon Oluştur</h2>
          <p className="mt-4 text-mint-900/70">
            Bilgilerinizi girin, tek tıkla WhatsApp üzerinden rezervasyon talebinizi bize iletin.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          onSubmit={handleSubmit}
          className="card-surface mx-auto mt-14 grid max-w-3xl gap-6 p-6 sm:p-10 md:grid-cols-2"
        >
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-mint-800">Oda Tipi</label>
            <div className="grid grid-cols-2 gap-3">
              {ROOM_TYPES.map((room) => (
                <button
                  type="button"
                  key={room.id}
                  onClick={() => dispatch(setRoomType(room.id))}
                  className={`rounded-xl border-2 px-4 py-3 text-sm font-semibold transition-all ${
                    roomType === room.id
                      ? 'border-mint-600 bg-mint-100 text-mint-800'
                      : 'border-mint-200 text-mint-700 hover:border-mint-400'
                  }`}
                >
                  {room.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="guestCount" className="mb-2 block text-sm font-medium text-mint-800">
              Kişi Sayısı
            </label>
            <select
              id="guestCount"
              className="input-field"
              value={guestCount}
              onChange={(e) => dispatch(setGuestCount(Number(e.target.value)))}
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>
                  {n} Kişi
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="checkIn" className="mb-2 block text-sm font-medium text-mint-800">
              Giriş Tarihi
            </label>
            <input
              id="checkIn"
              type="date"
              className="input-field"
              min={todayIso()}
              value={checkIn}
              onChange={(e) => dispatch(setCheckIn(e.target.value))}
              required
            />
          </div>

          <div>
            <label htmlFor="checkOut" className="mb-2 block text-sm font-medium text-mint-800">
              Çıkış Tarihi
            </label>
            <input
              id="checkOut"
              type="date"
              className="input-field"
              min={checkIn || todayIso()}
              value={checkOut}
              onChange={(e) => dispatch(setCheckOut(e.target.value))}
              required
            />
          </div>

          <div className="flex items-end">
            {!isValid && (checkIn || checkOut) && (
              <p className="text-xs text-clay-600">Çıkış tarihi, giriş tarihinden sonra olmalıdır.</p>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={!isValid}
            className="btn-primary md:col-span-2 mt-2 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.14c-.24.68-1.4 1.3-1.93 1.37-.5.08-1.12.11-1.8-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.17-1.56-1.17-2.97 0-1.42.74-2.11 1-2.4.26-.29.57-.36.76-.36h.55c.18 0 .42-.03.65.5.24.55.82 1.94.9 2.08.07.14.12.3.02.49-.1.19-.15.3-.29.46-.14.16-.3.36-.43.48-.14.14-.29.29-.13.57.17.29.75 1.24 1.62 2.01 1.11.99 2.04 1.3 2.33 1.44.29.14.46.12.63-.07.17-.19.72-.84.92-1.13.19-.29.38-.24.64-.14.26.1 1.65.78 1.93.92.29.14.48.21.55.33.07.12.07.68-.17 1.36Z" />
            </svg>
            WhatsApp ile Rezervasyon Gönder
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
