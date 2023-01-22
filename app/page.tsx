import { popularMovieService } from "@/services/api";

export default async function Home() {
  const { data: movies } = await popularMovieService.get();

  return (
    <div className="padded-section">
      {movies?.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
}
