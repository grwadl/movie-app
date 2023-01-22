import { getTrendingAndPopularMovies } from "./(common)";
import WelcomeSection from "./(components)/WelcomeSection";

export default async function Home() {
  const { popularMovies, trendingMovies } = await getTrendingAndPopularMovies();

  return (
    <div className="padded-section">
      <WelcomeSection />
      {trendingMovies?.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
}
