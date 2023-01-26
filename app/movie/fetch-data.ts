import { popularMovieService } from "@/services/api";

export async function fetchPopularMovies() {
  const { data } = await popularMovieService.get();
  return data;
}
