import MovieCard from "./MovieCard";
import TrendingMovieCard from "./TrendingMovieCard";
import { useEffect, useState } from "react";
import { getTrendingMovies } from "../services";
import { getRecommendedMovies } from "../services";

function Homepage() {
  //Variables for trending movies
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingloading, setTrendingLoading] = useState(false);
  const [trendingErr, setTrendingErr] = useState(null);

  //Variables for recommended movies
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [recommendedLoading, setRecommendedLoading] = useState(false);
  const [recErr, setRecErr] = useState(null);

  // Fetch trending movies data
  async function getDispTrendingMovies() {
    // Show loading indicator
    setTrendingLoading(true);
    try {
      // Call API to get trending movies
      const trendingMoviesData = await getTrendingMovies();

      // Update state with trending movies data
      setTrendingMovies(trendingMoviesData);
    } catch (error) {
      // Handle error
      setTrendingErr(Error);
    } finally {
      // Hide loading indicator
      setTrendingLoading(false);
    }
  }

  // Fetch recommended movies data
  async function getDispRecommendedMovies() {
    // Show loading indicator
    setRecommendedLoading(true);

    try {
      // Call API to get Recommended movies
      const recommendedMoviesData = await getRecommendedMovies();

      // Update state with Recommended movies data
      setRecommendedMovies(recommendedMoviesData);
      console.log(recommendedMoviesData);
    } catch (error) {
      // Handle error
      setRecErr(Error);
    } finally {
      // Hide loading indicator
      setRecommendedLoading(false);
    }
  }

  useEffect(() => {
    getDispTrendingMovies();
    getDispRecommendedMovies();
  }, []);
  return (
    <div className="bg-[#10141f] flex flex-col pr-7 gap-20 w-full ">
      <div className="flex flex-col gap-10">
        <h1 className="text-2xl font-semibold">Trending</h1>
        <div className=" overflow-x-auto w-full flex pb-6 gap-14  ">
          {trendingMovies.map((movie) => (
            <TrendingMovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <h1 className="text-2xl font-semibold">Recommended for you</h1>

        <div className="flex gap-3 gap-y-8 flex-wrap justify-around overflow-hidden ">
          {recommendedMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
