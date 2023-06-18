import React from "react";
import { BiSearchAlt } from "react-icons/bi";

function HomePage() {
  return (
    <div className="flex flex-col items-center w-[50vw] h-[100vh] p-10  mx-auto ">
      <h1 className="text-3xl font-bold mb-6">Produkte Suchen</h1>
      <form action="" className="p-6 bg-transparent mb-10">
        <div className="flex items-center gap-2 border-b mb-8 text-xl ">
          <BiSearchAlt size={30} />
          <input
            type="text"
            className="w-[50vw] p-4 focus:outline-0 "
            placeholder="Search"
          />
        </div>
        <div className="mt-16">
          <div className="flex gap-8 text-gray-500">
            <select className="w-[20vw] border-b py-2 focus:outline-0 text-xl">
              <option value="">Kategorien</option>
            </select>
            <select className="w-[20vw] border-b focus:outline-0 text-xl">
              <option value="">Unterkategorien</option>
            </select>
            <select className="w-[20vw] border-b focus:outline-0 text-xl">
              <option value="">Brand/Marke</option>
            </select>
          </div>
        </div>
      </form>
      <button className="border px-8 py-2 bg-primary text-white active:scale-90 transition-all">
        Search
      </button>
    </div>
  );
}

export default HomePage;
