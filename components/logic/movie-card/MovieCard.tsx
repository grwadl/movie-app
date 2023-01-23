import { IMovie } from "@/services/api/movie/types";
import Card from "../../ui/card/Card";

const renderMovies = (movie: IMovie) => (
  <Card
    img={movie.poster_path}
    className="basis-40 w-40 shrink-0 relative"
    key={movie.id}
  >
    <div className="content p-2">
      <h5 className="card-title mt-4 text-base font-bold whitespace-nowrap text-ellipsis overflow-hidden">
        {movie.title}
      </h5>
    </div>
  </Card>
);

export default renderMovies;