import renderBigMovies from "@/components/logic/movie-card/MovieCardBigList";
import List from "@/components/ui/list/List";
import { fetchPopularMovies } from "./fetch-data";

async function MoviesPage() {
  const movies = await fetchPopularMovies();
  return (
    <div className="padded-section mt-4">
      <List
        list={movies}
        renderFunc={renderBigMovies}
        className="flex justify-between flex-wrap w-full gap-5"
      />
    </div>
  );
}

export default MoviesPage;
