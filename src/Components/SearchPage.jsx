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

function SearchPage() {
  const [movies, setMovies] = useState([]);
  const [searchErr, setSearchErr] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log(location);

  const query = searchParams.get("query");

  //function to search movie
  const searchMovieFunct = async (param) => {
    try {
      //Call API to search for movies

      const searchedMovie = await searchMovies(param);

      //Update state with searched movie
      setMovies(searchedMovie);
    } catch (error) {
      //Handle error
      setSearchErr(error);
    }
  };
  useEffect(() => {
    searchMovieFunct(query);
  }, []);

  return (
    <div className="bg-[#10141f] flex flex-col pr-7 gap-20 w-full ">
      <h1 className="text-2xl font-semibold">Results for {`"${query}"`}</h1>
      <div className="flex gap-3 gap-y-8 flex-wrap justify-around overflow-hidden ">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
