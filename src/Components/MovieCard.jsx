import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link to={`movie/${movie.id}`}>
      <div className="flex flex-col items-start gap-2 w-full md:max-w-[280px] max-w-[300px] min-[580px]:max-w-[220px] ">
        <div className="relative">
          <img
            className="w-full md:max-w-[280px] min-[580px]:max-w-[220px] max-w-[300px] rounded-md "
            src={
              movie.backdrop_path
                ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                : "/Images/Test1.jpg"
            }
            alt=""
          />
          <button className="absolute top-[10px] right-[-47%]  w-full mx-3 font-bold ">
            <i className="uil uil-bookmark text-xl "></i>
          </button>
        </div>
        <div className="flex gap-2 text-[#57678c] text-sm">
          <p>2019</p>
          <p className="uppercase">{movie.original_language}</p>
          <p>PG</p>
        </div>
        <div className="font-bold text-lg mt-[-5px]">{movie.title}</div>
      </div>
    </Link>
  );
}

export default MovieCard;
