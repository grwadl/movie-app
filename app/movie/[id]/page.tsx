import { movieDetailsService } from "@/services/api/movie/movie-details";

type CertainMovieParams = { params: { id: string } };

const CertainMovie = async ({ params }: CertainMovieParams) => {
  const { data } = await movieDetailsService.getOne({ id: params.id });

  return <div className="padded-section">{data.title}</div>;
};

export default CertainMovie;
