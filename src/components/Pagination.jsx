import React from "react";

function Pagination({handlePrev, handleNext,pageNo}) {
  return (
    <div className="bg-gray-500 p-2 mt-8 flex justify-center">
      <div onClick={handlePrev} className="px-8">
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <div className="font-bold">{pageNo}</div>
      <div onClick={handleNext} className="px-8">
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}

export default Pagination;
