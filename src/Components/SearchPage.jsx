import React from "react";
import {
  useLocation,
  useOutletContext,
  useParams,
  useSearchParams,
} from "react-router-dom";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import { searchMovies } from "../services";
import Loader from "./Loader";

function SearchPage() {
  const [movies, setMovies] = useState([]);
  const [searchErr, setSearchErr] = useState(null);
  const [searchloading, setSearchLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log(location);

  const query = searchParams.get("query");

  //function to search movie
  const searchMovieFunct = async (param) => {
    // Show loading indicator
    setSearchLoading(true);
    try {
      //Call API to search for movies

      const searchedMovie = await searchMovies(param);

      //Update state with searched movie
      setMovies(searchedMovie);
    } catch (error) {
      //Handle error
      setSearchErr(error);
    } finally {
      // Hide loading indicator
      setSearchLoading(false);
    }
  };
  useEffect(() => {
    searchMovieFunct(query);
  }, []);

  return (
    <div className="bg-[#10141f] flex flex-col pr-7 gap-10 w-full ">
      <h1 className="text-2xl font-semibold">Results for {`"${query}"`}</h1>
      <div className="flex gap-3 gap-y-8 flex-wrap justify-around overflow-hidden ">
        {searchloading ? (
          <Loader />
        ) : (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        )}
      </div>
    </div>
  );
}

export default SearchPage;
