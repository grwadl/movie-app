import renderMovies from "@/components/logic/movie-card/MovieCard";
import List from "@/components/ui/list/List";
import WelcomeSection from "../components/logic/welcome-section/WelcomeSection";
import { getTrendingAndPopularMovies } from "./fetch-data";

export default async function Home() {
  const { popularMovies, trendingMovies } = await getTrendingAndPopularMovies();

  return (
    <div className="padded-section">
      <WelcomeSection />
      <h4 className="text-xl font-semibold my-4">Trending</h4>
      <List
        list={trendingMovies}
        renderFunc={renderMovies}
        className="flex overflow-x-scroll gap-5"
      />
      <h4 className="text-xl mt-10 font-semibold my-4">What&apos;s popular</h4>
      <List
        list={popularMovies}
        renderFunc={renderMovies}
        className="flex mt-5 overflow-x-scroll gap-5"
      />
    </div>
  );
}
