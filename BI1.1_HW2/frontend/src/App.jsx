import React from 'react'
import Hotel from './components/Hotel'
import HotelTitle from './components/HotelTitle'

const App = () => {
  return (
    <main>
      <Hotel />
      <HotelTitle name="New Hotel 1" />
    </main>
  )
}

export default App