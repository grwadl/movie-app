import { movieDetailsService } from "@/services/api/movie/movie-details";
import Image from "next/image";

type CertainMovieParams = { params: { id: string } };

const CertainMovie = async ({ params }: CertainMovieParams) => {
  const { data } = await movieDetailsService.getOne({ id: params.id });

  return (
    <div className="movie-page">
      <div className="relative h-[500px]">
        <Image
          width={1000}
          height={600}
          className="absolute top-0 z-[0] left-0 w-full h-full object-cover brightness-50 blur-sm"
          src={data.backdrop_path}
          alt="background"
        />
        <div className="relative h-full flex flex-wrap gap-10 padded-section z-[1] py-10">
          <div className="basis-[300px] h-full rounded-md overflow-hidden">
            <Image
              width={300}
              height={500}
              className="w-full max-h-full min-h-0 object-cover"
              src={data.poster_path}
              alt="image"
            />
          </div>
          <div className="pt-10">
            <div className="text-white">
              <span className="title font-bold mr-2 text-3xl">
                {data.title}
              </span>
              <span className="text-3xl opacity-75">
                ({data.release_date.split("-")[0]})
              </span>
            </div>
            <div className="mt-2 text-white flex items-center gap-2">
              <span className="text-lg">{data.release_date}</span>
              <div className="genres flex gap-1">
                {data.genres.map((genre) => (
                  <span key={genre.id}>{genre.name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertainMovie;
