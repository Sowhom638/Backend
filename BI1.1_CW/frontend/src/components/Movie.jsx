import React, {useState} from 'react'
import useFetch from '../../useFetch'

const Movie = () => {
  const [successMessage, setSuccessMessage] = useState("")
    const {data, loading, error} = useFetch("http://localhost:3000/movies");
console.log(data);

const handleDelete = async (movieId) => {
  try {
    const response =  await fetch(`http://localhost:3000/movies/${movieId}`, {
    method: "DELETE"
  })
  if(response.ok) {
    const data = await response.json();
    if(data){
    setSuccessMessage("Movie deleted successfully");

    window.location.reload();
    }
  }else{
    throw "Failed to delete movie"
  }
  } catch (error) {
    console.log("Error: ", error);
    
  }
  
}
  return (
    <div>
      <ul>
        {data && data.movie.map(data => (
          <li key={data._id}>
            {data.title} <button onClick={()=>handleDelete(data._id)}>Delete</button>
            </li>
        ))}
      </ul>
      {successMessage != "" && <p>{successMessage}</p>}
    </div>
  )
}

export default Movie
// https://tanaypratap.notion.site/AI-Eng-274a891ea30a80629314e4c1e7063ce0
// https://app.eraser.io/workspace/0IoNrhaSJEj5x8aG2MR3?origin=share