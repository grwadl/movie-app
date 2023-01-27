"use client";
import Button from "@/components/ui/button/Button";
import { usePopularMovies } from "@/store";
import { useEffect } from "react";

function MoviesPage() {
  const { meta, movies, changePage, fetchNewMovies, clear } =
    usePopularMovies();

  useEffect(() => {
    fetchNewMovies?.();

    return () => {
      clear();
    };
  }, [meta?.page]);

  if (!movies?.length) return <div>Loading</div>;

  return (
    <div className="padded-section mt-4">
      <Button onClick={() => changePage({ page: (meta?.page ?? 1) + 1 })}>
        Load More
      </Button>
    </div>
  );
}

export default MoviesPage;
