"use client";
import renderBigMovies from "@/components/logic/movie-card/MovieCardBigList";
import Button from "@/components/ui/button/Button";
import List from "@/components/ui/list/List";
import usePopularMoviesStoreProvider from "@/store/popular-movies";
import { useEffect } from "react";
import Loading from "../loading";

const MovieInfiniteList = () => {
  const { meta, movies, changePage, fetchNewMovies, isLoading } =
    usePopularMoviesStoreProvider();

  useEffect(() => {
    fetchNewMovies?.();
  }, [meta.page]);

  if (isLoading && !movies.length) return <Loading />;

  return (
    <div className="mt-4">
      <List
        className="flex flex-wrap gap-5"
        renderFunc={renderBigMovies}
        list={movies}
      />
      {isLoading ? (
        <div className="py-10">
          <Loading />
        </div>
      ) : (
        <Button
          className="my-10 px-4 py-5 bg-dark-blue text-white w-full hover:bg-gray-700 duration-300"
          onClick={() => changePage({ page: (meta.page ?? 1) + 1 })}
        >
          Load More
        </Button>
      )}
    </div>
  );
};

export default MovieInfiniteList;
