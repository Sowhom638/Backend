import React from 'react'
import Book from './components/Book'
import BookTitle from './components/BookTitle'
import BookByAuthor from './components/BookByAuthor'
import AddBookForm from './components/AddBookForm'

const App = () => {
  return (
    <main>
      <AddBookForm />
      <Book />
      <BookTitle title="Shoe Dog" />
      <BookByAuthor author="Harper Lee" />
    </main>
  )
}

export default App