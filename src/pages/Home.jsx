import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import RoomTypes from '../components/RoomTypes'
import ReservationForm from '../components/ReservationForm'
import MapSection from '../components/MapSection'

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <RoomTypes />
      <ReservationForm />
      <MapSection />
    </>
  )
}
