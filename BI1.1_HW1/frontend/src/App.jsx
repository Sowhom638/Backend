import React from 'react'
import Book from './components/Book'
import BookTitle from './components/BookTitle'
import BookByAuthor from './components/BookByAuthor'

const App = () => {
  return (
    <main>
      <Book />
      <BookTitle title="Shoe Dog" />
      <BookByAuthor author="Harper Lee" />
    </main>
  )
}

export default App