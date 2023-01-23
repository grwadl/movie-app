import { Environment } from "@/configs";
import { popularMovieService } from "@/services/api";
import { trendingMoviesService } from "@/services/api/movie/trending";
import { IMovie } from "@/services/api/movie/types";

const getTrendingPromise = () =>
  trendingMoviesService.get({
    common: { overrideUrl: Environment.API_URL + "/trending/movie/week" },
  });

const getPopularPromise = () => popularMovieService.get();

export const getTrendingAndPopularMovies = async (): Promise<{
  popularMovies: IMovie[];
  trendingMovies: IMovie[];
}> => {
  const [{ data: popularMovies }, { data: trendingMovies }] = await Promise.all(
    [getPopularPromise(), getTrendingPromise()]
  );

  return { popularMovies, trendingMovies };
};
