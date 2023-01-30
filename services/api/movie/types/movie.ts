export type IMovie = {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  title: string;
  backdrop_path: string;
  vote_average: number;
  genres: { id: number; name: string }[];
};
