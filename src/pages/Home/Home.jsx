import { getTrendingMovies } from 'services/fetchMovies';
import { useEffect, useState } from 'react';
import { MoviesList } from 'components/MovieList/MoviesList';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  return (
    <>
      <MoviesList movies={movies} />
    </>
  );
};
