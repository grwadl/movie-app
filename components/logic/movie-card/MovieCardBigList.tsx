import Card from "@/components/ui/card/Card";
import { IMovie } from "@/services/api/movie/types";
import Link from "next/link";
import MovieCardMenu from "./MovieCardMenu";

const renderBigMovies = (movie: IMovie) => (
  <Link
    className="w-full sm:max-w-[calc((100%_/_3)_-_1.25rem)] md:max-w-[calc(25%_-_1.25rem)] lg:max-w-[calc(20%_-_1.25rem)] shrink-1 grow-1"
    key={movie.id}
    href={`/movie/${movie.id}`}
  >
    <Card
      img={movie.poster_path}
      className="relative w-full overflow-hidden"
      imgClassNames="h-[380px] w-full"
      key={movie.id}
    >
      <MovieCardMenu />
      <div className="content p-2 min-w-0 truncate">
        <h5 className="card-title inline mt-4 min-w-0 w-full text-base font-bold">
          {movie.title}
        </h5>
      </div>
    </Card>
  </Link>
);

export default renderBigMovies;
