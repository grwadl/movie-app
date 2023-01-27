import { popularMovieService } from "@/services/api";
import type { IMovie } from "@/services/api/movie/types";
import { Meta } from "@/services/api/movie/types/meta";
import { create } from "zustand";

interface IPopularMoviesPageState {
  movies: IMovie[];
  meta: Meta;
  changePage: (meta: Meta) => void;
  fetchNewMovies: () => void;
  clear: () => void;
}

export const usePopularMovies = create<IPopularMoviesPageState>((set, get) => ({
  movies: [],
  meta: { page: 1 },

  changePage: (meta: Meta) =>
    set((state) => ({
      ...state,
      meta,
    })),

  fetchNewMovies: async () => {
    const page = (get().meta?.page ?? 1) + "";
    const { data, meta: newMeta } = await popularMovieService.get({
      data: { page },
    });

    set((state) => ({
      ...state,
      meta: {
        ...state.meta,
        total_pages: newMeta?.total_pages ?? 1,
        total_results: newMeta?.total_results ?? 1,
      },
      movies: [...(state?.movies ?? []), ...data],
    }));
  },

  clear: () => set({}, true),
}));
