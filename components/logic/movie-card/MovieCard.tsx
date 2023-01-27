import Card from "@/components/ui/card/Card";
import { IMovie } from "@/services/api/movie/types";
import MovieCardMenu from "./MovieCardMenu";

type Props = IMovie;

const MovieCard = ({ poster_path, id, title }: Props) => {
  return (
    <Card
      img={poster_path}
      className="relative w-full overflow-hidden"
      imgClassNames="h-[380px] w-full"
      key={id + title}
    >
      <MovieCardMenu />
      <div className="content mt-4 p-2 min-w-0 truncate">
        <h5 className="card-title inline min-w-0 w-full text-base font-bold">
          {title}
        </h5>
      </div>
    </Card>
  );
};

export default MovieCard;
