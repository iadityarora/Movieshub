import React, { useEffect, useState } from "react";
import genreIds from "../utility/genre";

function WatchList({ watchList, setWatchList,handleRemoveFromWatchList }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");
  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  let sortIncreasing = () => {
    let sortedInc = watchList.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchList([...sortedInc]);
  };

  let sortDecreasing = () => {
    let sortedDec = watchList.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchList([...sortedDec]);
  };

  useEffect(() => {
    let temp = watchList.map((movieObj) => {
      return genreIds[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
    console.log(temp);
  }, [watchList]);

  return (
    <>
      <div className="flex flex-wrap justify-center m-5 font-bold">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currGenre == genre
                  ? "flex justify-center items-center bg-blue-400 rounded-xl text-white h-[3rem] w-[9rem] mx-2"
                  : "flex justify-center items-center bg-gray-400 rounded-xl text-white h-[3rem] w-[9rem] mx-2"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center my-8">
        <input
          onChange={handleSearch}
          value={search}
          placeholder="Search for movies"
          type="text"
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4"
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 m-10">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>

              <th className="flex justify-center">
                <div onClick={sortIncreasing} className="p-2">
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
                <div className="p-2 ">Ratings</div>
                <div onClick={sortDecreasing} className="p-2">
                  <i class="fa-solid fa-arrow-down"></i>
                </div>
              </th>

              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody className="">
            {watchList
              .filter((movieObj) => {
                if (currGenre == "All Genres") {
                  return true
                } else {
                  return genreIds[movieObj.genre_ids[0]] == currGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b-2">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-[6rem] w-[10rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                        alt="image"
                      />
                      <div className="mx-20">{movieObj.title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreIds[movieObj.genre_ids[0]]}</td>
                    <td onClick={()=>handleRemoveFromWatchList(movieObj)} className="text-red-900">Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
