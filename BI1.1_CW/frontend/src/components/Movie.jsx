import React from 'react'
import useFetch from '../../useFetch'

const Movie = () => {
    const {data, loading, error} = useFetch("http://localhost:3000/movies");
console.log(data);

  return (
    <div>
      <ul>
        {data && data.movie.map(data => (
          <li key={data._id}>{data.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Movie
// https://tanaypratap.notion.site/AI-Eng-274a891ea30a80629314e4c1e7063ce0
// https://app.eraser.io/workspace/0IoNrhaSJEj5x8aG2MR3?origin=share