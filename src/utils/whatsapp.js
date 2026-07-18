import { CONTACT } from '../data/siteData'
import { ROOM_TYPES } from '../data/siteData'

const formatDate = (isoDate) => {
  if (!isoDate) return 'Belirtilmedi'
  const [year, month, day] = isoDate.split('-')
  return `${day}.${month}.${year}`
}

export const buildReservationMessage = ({ roomType, guestCount, checkIn, checkOut }) => {
  const roomLabel = ROOM_TYPES.find((r) => r.id === roomType)?.label ?? roomType

  return [
    'Merhaba, Gökçeada Konak Pansiyon için rezervasyon yaptırmak istiyorum.',
    '',
    `Oda Tipi: ${roomLabel}`,
    `Kişi Sayısı: ${guestCount}`,
    `Giriş Tarihi: ${formatDate(checkIn)}`,
    `Çıkış Tarihi: ${formatDate(checkOut)}`,
    '',
    'Uygunluk ve fiyat bilgisi alabilir miyim?',
  ].join('\n')
}

export const buildWhatsappUrl = (reservation) => {
  const message = buildReservationMessage(reservation)
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`
}
