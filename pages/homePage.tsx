import React from "react";
import MegaCategory from "./components/resource/MegaCategory";
import SearchProduct from "./components/resource/SearchProduct";

function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center p-10">
      <div className="flex flex-col items-center w-[50vw] p-4  mx-auto ">
        <h1 className="text-3xl font-bold mb-6">Search Product</h1>
        <div className="p-6 bg-transparent mb-10">
          <SearchProduct />
          <div className="h-[30vh]">
            <MegaCategory />
          </div>
        </div>
      </div>
      <button className="border px-8 py-2 bg-primary text-white text-xl tracking-wider font-bold active:scale-90 active:font-normal transition-all w-[20vw]">
        Search
      </button>
    </div>
  );
}

export default HomePage;
