import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services";

function MovieDets() {
  const { id } = useParams();
  const [movieDets, setMovieDets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getMovieDets = async (id) => {
    setLoading(true);
    try {
      const movieDetsData = await getMovieDetails(id);
      setMovieDets(movieDetsData);
      console.log(movieDetsData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMovieDets(id);
  }, []);

  //Code to get an array of genre
  const genreArray = [];
  movieDets.genres &&
    movieDets.genres.forEach((genre) => {
      genreArray.push(genre.name);
    });
  console.log(genreArray);

  //Background image styles
  const backdropStyle = {
    backgroundImage: `linear-gradient(to bottom, #00000000 , #000000eb), url(https://image.tmdb.org/t/p/w500/${movieDets.backdrop_path}) `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className={` h-screen  `}>
      <div
        style={backdropStyle}
        className=" w-full rounded-md h-full bg-[#00000017] flex items-end justify-center px-3 py-2 pb-16 "
      >
        <div className="flex flex-col sm:flex-row justify-between max-w-[1000px] gap-10 w-full">
          <div className="flex flex-col items-start w-full  ">
            <p className=" text-4xl font-bold text-white ">{movieDets.title}</p>
            <p className=" ">{movieDets.tagline}</p>
            <button className="my-3 px-4 py-2 rounded-lg bg-[#e41b21] flex items-center gap-1">
              <p>Add to Bookmark</p>
              <i className="uil uil-bookmark text-3xl "></i>
            </button>
            <div className=" flex gap-2 ">
              <p>{movieDets.vote_average}</p>
              <p>year</p>
              <p>{movieDets.original_language}</p>
            </div>
            <div className=" flex gap-2  mb-5">
              <p className="">18+</p>
              <p>runtime</p>
            </div>
            <p>{movieDets.overview}</p>
          </div>
          <div className="flex flex-col marker: w-full  ">
            <div className="flex text-wrap flex-col gap-2">
              <p>
                <span className="text-lg font-semibold">Status</span>:{" "}
                {movieDets.status}
              </p>
              {genreArray && (
                <p className="flex items-center w-full flex-wrap gap-1">
                  <span className="text-lg font-semibold">Genre: </span>

                  {genreArray.map((genre, index) => (
                    <p key={index}>{genre},</p>
                  ))}
                </p>
              )}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDets;
