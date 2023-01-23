import Card from "@/components/card/Card";
import { getTrendingAndPopularMovies } from "./(common)";
import WelcomeSection from "./(components)/WelcomeSection";

export default async function Home() {
  const { popularMovies, trendingMovies } = await getTrendingAndPopularMovies();

  return (
    <div className="padded-section">
      <WelcomeSection />
      <h4 className="text-xl font-semibold my-4">What&apos;s popular</h4>
      <div className="flex overflow-y-scroll gap-5">
        {trendingMovies?.map((movie) => (
          <Card
            img={movie.poster_path}
            className="h-80 basis-40 w-40 shrink-0"
            key={movie.id}
          >
            {movie.title}
          </Card>
        ))}
      </div>
    </div>
  );
}
