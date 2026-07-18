import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  roomType: 'standart',
  guestCount: 2,
  checkIn: '',
  checkOut: '',
}

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    setRoomType(state, action) {
      state.roomType = action.payload
    },
    setGuestCount(state, action) {
      state.guestCount = action.payload
    },
    setCheckIn(state, action) {
      state.checkIn = action.payload
    },
    setCheckOut(state, action) {
      state.checkOut = action.payload
    },
    resetReservation() {
      return initialState
    },
  },
})

export const { setRoomType, setGuestCount, setCheckIn, setCheckOut, resetReservation } =
  reservationSlice.actions

export default reservationSlice.reducer
