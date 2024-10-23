import React from "react";

function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[70vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://i.redd.it/u5tmm8aks9n41.jpg)`,
      }}
    >
      <diV className="text-white w-full text-center text-xl bg-blue-900/60 p-3 my-2 font-style: italic">
        Stranger Things
      </diV>
    </div>
  );
}

export default Banner;
