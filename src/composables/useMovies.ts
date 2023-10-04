import { useLoadingStore } from "@/stores/UseLoadingStore";
import type { Movie } from "@/types";

export interface UseMovies {
  searchMovies: (query: string) => Promise<Movie[]>,
  topRatedMovies: (length?: number) => Promise<Movie[]>
  getMovieInfo: (id: number) => Promise<Movie>,
}

export function useMovies(): UseMovies {

  const apiDetailUrl = 'https://api.themoviedb.org/3/movie/';
  const apiSearchUrl = 'https://api.themoviedb.org/3/search/movie';
  const language = 'es-ES';

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      // eslint-disable-next-line max-len
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MThhNTU4NmUwNmQ4Mjc5OTY0YzM1Y2E5ZWIyOTg1NyIsInN1YiI6IjY1MWQ0MWM0MDcyMTY2MDEzOWM3NmQ2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.45fEuS8hLU_s2GpNE338hLQPai_Nzev0VpXWUwbV12c`
    }
  };

  const moviesFetch = async (url: string, errorString: string = '') => {
    useLoadingStore().setShowLoading(true);
    const results = await fetch(url, options)
      .then((response) => { return response.json(); })
      .then((json) => {
        useLoadingStore().setShowLoading(false);
        return json;
      })
      .catch((error) => {
        useLoadingStore().setShowLoading(false);
        console.error('Error!!!', errorString, error);
      });
    return results;
  };

  const searchMovies = async (query: string) => {
    const url = `${apiSearchUrl}?query=${query}&include_adult=false&language=${language}&page=1`;
    const jsonRes = await moviesFetch(url, 'Search error');
    return jsonRes ? jsonRes.results as Movie[] : [];
  };

  const topRatedMovies = async (length: number = 6) => {
    const url = `${apiDetailUrl}top_rated?language=${language}&page=1`;
    const jsonRes = await moviesFetch(url, 'Top rated error');
    const movies: Movie[] = jsonRes ? jsonRes.results as Movie[] : [];
    return movies.slice(0, length);
  };

  const getMovieInfo = async (id: number) => {
    const url = `${apiDetailUrl}${id}?language=${language}`;
    const jsonRes = await moviesFetch(url, 'Movie info error');
    return jsonRes as Movie ?? [];
  };

  return {
    searchMovies,
    topRatedMovies,
    getMovieInfo,
  };
}