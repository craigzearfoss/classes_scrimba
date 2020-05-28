import React, { useState } from "react";
import MovieCard from "./MovieCard";

export default function SearchMovies() {
  // states - input query, movies
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=4419ec821ac1c971f65b5cbb1e10a2b5&language=en-US&query=${query}&page=1&include_adult=false`;
    console.log(url);

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
      console.log(movies);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder="i.e. Jurassic Park"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
}
