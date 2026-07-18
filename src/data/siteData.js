import apart1 from '../assets/rooms/apart-1.jpg'
import apart2 from '../assets/rooms/apart-2.jpg'
import apart3 from '../assets/rooms/apart-3.jpg'
import apart4 from '../assets/rooms/apart-4.jpg'
import apart5 from '../assets/rooms/apart-5.jpg'
import standart1 from '../assets/rooms/standart-1.jpg'
import standart2 from '../assets/rooms/standart-2.jpg'
import gallery1 from '../assets/gallery/gallery-1.jpg'
import gallery2 from '../assets/gallery/gallery-2.jpg'
import gallery3 from '../assets/gallery/gallery-3.jpg'
import gallery4 from '../assets/gallery/gallery-4.jpg'
import gallery5 from '../assets/gallery/gallery-5.jpg'
import gallery6 from '../assets/gallery/gallery-6.jpg'

export const CONTACT = {
  whatsappNumber: '905316454347',
  instagramHandle: 'gokceadakonakpansiyon',
  instagramUrl: 'https://instagram.com/gokceadakonakpansiyon',
  address: 'Küme Evleri No:86, 17762 Yenibademli, Gökçeada / Çanakkale',
  mapsEmbedSrc:
    'https://www.google.com/maps?q=K%C3%BCme+Evleri+No%3A86%2C+Yenibademli%2C+G%C3%B6k%C3%A7eada%2F%C3%87anakkale&output=embed',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=K%C3%BCme+Evleri+No%3A86+Yenibademli+G%C3%B6k%C3%A7eada+%C3%87anakkale',
}

export const ROOM_TYPES = [
  {
    id: 'standart',
    label: 'Standart Oda',
    tagline: 'Sade, ferah ve huzurlu',
    description:
      'Çift kişilik yatak, geniş gardırop ve doğal ışık alan sakin bir oda. Gökçeada\'nın huzurunu hissetmek isteyenler için idealdir.',
    images: [standart1, standart2],
    features: ['Çift kişilik yatak', 'Ortak mutfak erişimi', 'Klima', 'Özel banyo'],
  },
  {
    id: 'apart',
    label: 'Apart Oda',
    tagline: 'Mutfaklı, bağımsız yaşam alanı',
    description:
      'Kendi mutfağı, oturma alanı ve terasa açılan kapısıyla bağımsız bir ev konforu sunan apart oda. Uzun konaklamalar için mükemmel.',
    images: [apart1, apart2, apart3, apart4, apart5],
    features: ['Mutfak & buzdolabı', 'Oturma alanı', 'Teras erişimi', 'Klima & TV'],
  },
]

export const GALLERY_IMAGES = [
  { src: gallery1, alt: 'Konak Pansiyon gündüz terası' },
  { src: gallery2, alt: 'Konak Pansiyon banyo' },
  { src: gallery3, alt: 'Konak Pansiyon gece bahçe oturma alanı' },
  { src: gallery4, alt: 'Konak Pansiyon bahçe girişi ve KONAK tabelası' },
  { src: gallery5, alt: 'Konak Pansiyon çiçekli taş dekorasyon' },
  { src: gallery6, alt: 'Konak Pansiyon bahçe yolu' },
  { src: apart1, alt: 'Apart oda mutfak' },
  { src: apart2, alt: 'Apart oda yaşam alanı' },
  { src: standart1, alt: 'Standart oda yatak odası' },
]

export const PLACES_TO_VISIT = [
  {
    name: 'Yıldız Koyu',
    description: "Türkiye'nin ilk sualtı milli parkı; karadan denize girilebilen tek koy, dalış ve şnorkel için eşsiz.",
    distanceKm: 3,
    driveMinutes: 6,
  },
  {
    name: 'Zeytinli Köyü',
    description: 'Taş evleri, kafeleri ve dibek kahvesiyle Rum kültürünün izlerini taşıyan, Yenibademli\'ye komşu şirin bir köy.',
    distanceKm: 3,
    driveMinutes: 6,
  },
  {
    name: 'Şarap Bağları (Zeytinli - Tepeköy Bağcılık Bölgesi)',
    description: "MÖ 2900'den beri bağcılık yapılan adanın organik üzüm bağları; Kalabaki ve Mavropali gibi yerli çeşitlerle şarap tadımı yapılabilir.",
    distanceKm: 5,
    driveMinutes: 10,
  },
  {
    name: 'Kaleköy',
    description: 'Rengarenk evleri ve tarihi Kastro kalesiyle Gökçeada\'nın en fotoğraflanan köyü, muhteşem gün batımı manzarası sunar.',
    distanceKm: 11,
    driveMinutes: 18,
  },
  {
    name: 'Tuz Gölü',
    description: 'Eylül-Ekim aylarında flamingoların uğrak noktası olan doğal göl; kuş gözlemciliği için harika bir rota.',
    distanceKm: 14,
    driveMinutes: 22,
  },
  {
    name: 'Aydıncık Plajı (Kefalos)',
    description: 'Sığ ve berrak suyuyla aileler için ideal, adanın en işlek plajlarından biri.',
    distanceKm: 13,
    driveMinutes: 20,
  },
  {
    name: 'Marmaros Şelalesi',
    description: '40 metrelik kayalıklardan dökülen şelale; orman patikasında 20-30 dakikalık yürüyüşle ulaşılan saklı cennet.',
    distanceKm: 19,
    driveMinutes: 28,
  },
  {
    name: 'Dereköy Orman Yürüyüşü',
    description: 'Çam ormanları arasında uzanan doğa yürüyüşü rotasıyla trekking severler için birebir.',
    distanceKm: 17,
    driveMinutes: 25,
  },
]
