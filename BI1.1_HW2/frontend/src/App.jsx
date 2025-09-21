import React from 'react'
import Hotel from './components/Hotel'
import HotelTitle from './components/HotelTitle'
import AddHotelForm from './components/AddHotelForm'

const App = () => {
  return (
    <main>
      <AddHotelForm />
      <Hotel />
      <HotelTitle name="New Hotel 1" />
    </main>
  )
}

export default App