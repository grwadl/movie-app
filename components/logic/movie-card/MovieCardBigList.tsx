import { IMovie } from "@/services/api/movie/types";
import Link from "next/link";
import MovieCard from "./MovieCard";

const renderBigMovies = (movie: IMovie) => (
  <Link
    className="w-full sm:max-w-[calc((100%_/_3)_-_1.25rem)] md:max-w-[calc(25%_-_1.25rem)] lg:max-w-[calc(20%_-_1.25rem)] shrink-1 grow-1"
    key={movie.id}
    href={`/movie/${movie.id}`}
  >
    <MovieCard {...movie} />
  </Link>
);

export default renderBigMovies;
