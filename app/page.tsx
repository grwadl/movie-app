import Card from "@/components/card/Card";
import List from "@/components/list/List";
import { IMovie } from "@/services/api/movie/types";
import { getTrendingAndPopularMovies } from "./(common)";
import WelcomeSection from "./(components)/WelcomeSection";

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

export default async function Home() {
  const { popularMovies, trendingMovies } = await getTrendingAndPopularMovies();

  return (
    <div className="padded-section">
      <WelcomeSection />
      <h4 className="text-xl font-semibold my-4">What&apos;s popular</h4>
      <List
        list={trendingMovies}
        renderFunc={renderMovies}
        className="flex overflow-x-scroll gap-5"
      />
      <List
        list={popularMovies}
        renderFunc={renderMovies}
        className="flex overflow-x-scroll gap-5"
      />
    </div>
  );
}
