import React from "react";

function Bookmarks() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-2xl font-semibold">Your Bookmarks</h1>

      <div className="flex gap-3 gap-y-8 flex-wrap justify-around overflow-hidden ">
        "Get ready to bookmark and binge! Coming soon to your movie app"
        {/* {recommendedMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))} */}
      </div>
    </div>
  );
}

export default Bookmarks;
