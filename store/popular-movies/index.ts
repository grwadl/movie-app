import { useRef } from "react";
import { usePopularMovies } from "./popular-movies-pagination";

export default function usePopularMoviesStoreProvider() {
  const initialized = useRef<boolean>(false);

  if (!initialized.current) {
    usePopularMovies.setState({ movies: [], meta: { page: 1 } });
    initialized.current = true;
  }

  return usePopularMovies();
}
