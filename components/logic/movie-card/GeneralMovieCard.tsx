import { IMovie } from "@/services/api/movie/types";
import Link from "next/link";
import MovieCard from "./MovieCard";

const renderMovies = (movie: IMovie) => (
  <Link
    className="block basis-60 grow-0 shrink-0"
    key={movie.id}
    href={`/movie/${movie.id}`}
  >
    <MovieCard {...movie} />
  </Link>
);

export default renderMovies;
