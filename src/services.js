//This is where the api calls are made
// Calls to be made include:
// 1. Get trending movies
// 2. get recommended movies
// 3. get movie details
// 4 search movies
// 6 Bookmark movies
// 5. Get user bookmarked movies

const { VITE_TMDB_ACCESS_TOKEN } = import.meta.env;
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${VITE_TMDB_ACCESS_TOKEN}`,
  },
};

// 1. Get trending movies
export const getTrendingMovies = async () => {
  const trendingMovies = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  );
  const trendingMoviesData = await trendingMovies.json();
  return trendingMoviesData.results;
};

// 2. get recommended movies
export const getRecommendedMovies = async () => {
  const recommendedMovies = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  );
  const recommendedMoviesData = await recommendedMovies.json();
  return recommendedMoviesData.results;
};

// 3. get movie details
export const getMovieDetails = async (movieId) => {
  const movieDetails = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&page=1`,
    options
  );
  const movieDetailsData = await movieDetails.json();
  return movieDetailsData;
};

//4. Search Movie title
export const searchMovies = async (query) => {
  const searchMovies = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=1&include_adult=false`,
    options
  );
  const searchMoviesData = await searchMovies.json();
  return searchMoviesData.results;
};
