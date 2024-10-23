import React from "react";
import WatchList from "./WatchList";

function MovieCard({
  movieObj,
  poster_path,
  name,
  handleAddToWatchList,
  handleRemoveFromWatchList,
  watchList = []
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 cursor-pointer"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div onClick={() => handleRemoveFromWatchList(movieObj)}>&#10060;</div>
      ) : (
        <div
          onClick={() => handleAddToWatchList(movieObj)}
          className=" flex items-center"
        >
          <div>&#128525;</div>
        </div>
      )}
      <div className="text-white rounded-xl text-xl w-full p-0.5 text-center bg-gray-900/60">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
// text-white font-bold bg-gray-500 text-center
