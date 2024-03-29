import React from "react";
import { Link } from "react-router-dom";

function TrendingMovieCard({ movie }) {
  return (
    <Link
      to={`movie/${movie.id}`}
      className=" flex-none inline cursor-pointer relative max-w-[330px] w-full "
    >
      <img
        className="w-full aspect-video rounded "
        src={
          movie.backdrop_path
            ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
            : "/Images/Test1.jpg"
        }
        alt="backdrop"
      />
      <div className="absolute bottom-[15px] max-w-[220px] w-full flex flex-col ">
        <div className="flex items-center gap-2  px-3 text-sm">
          <p>2014</p>
          <p className=" uppercase  ">{movie.original_language}</p>
          <p>18+</p>
        </div>
        <div className=" w-full mx-3 font-bold text-xl ">
          <h1 className="text-wrap">{movie.title}</h1>
        </div>
      </div>
      <button className="absolute top-[20px] right-[-45%] w-full mx-3 font-bold ">
        <i className="uil uil-bookmark text-xl "></i>
      </button>
    </Link>
  );
}

export default TrendingMovieCard;
