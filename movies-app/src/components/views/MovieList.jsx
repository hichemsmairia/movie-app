import { useEffect, useState } from "react";
import axios from "axios";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await axios.get("http://localhost:5000/api/movies/get_all");
      setMovies(response.data);
    }

    fetchMovies();
  }, []);

  return (
    <div className="container">

      <div className="align-items-center justify-content-center mt-4">
        <h2 className="mb-4 text-bg-info text-center col-4 offset-4">Liste des films</h2>
      </div>


      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-4 mb-4" key={movie._id}>
            <div className="card bg-dark text-white">
              <h4>{movie.poster}</h4>
              <img
                className="card-img-top rounded"
                src={new URL(
                  `${movie.poster}`,
                  import.meta.url
                ).toString()}
                alt={movie.title}
              />
              <video src={movie.poster} controls />

              <div className="card-body">
                <h5 className="card-title text-light">{movie.title}</h5>
                <p className="card-text">{movie.description}</p>
                <p className="card-text">
                  <small className="text-muted">{movie.year}</small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;


