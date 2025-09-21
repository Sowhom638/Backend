import React from 'react'
import Movie from './components/Movie'
import MovieTitle from './components/MovieTitle'
import AddMovieForm from './components/AddMovieForm'

const App = () => {
  return (
    <main>
      <AddMovieForm />
      <Movie />
      <MovieTitle title="Gully Boy" />
    </main>
  )
}

export default App