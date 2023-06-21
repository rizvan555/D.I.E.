import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

interface myResult {
  result: string;
}
interface SearchResult {
  category: string;
  name: string;
  models: { name: string; alcohol: string; allergic: string; halal: string }[];
}

function SearchProduct({ handleChange, handleSearch, searchResults }: any) {
  const [inputValue, setInputValue] = useState<string>("");

  const onSearchClick = () => {
    handleSearch();
  };

  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center  gap-4">
        <div className="flex items-center gap-2 border-b mb-8 text-xl ">
          <BiSearchAlt size={30} />
          <input
            type="text"
            className="w-[50vw] p-4 focus:outline-0 "
            placeholder="Search"
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
              handleChange(event);
            }}
            onKeyDown={onKeyPress}
          />
        </div>
        <div className="mb-4">
          <button
            className="border px-4 py-2 bg-primary text-white text-xl tracking-wider font-bold active:scale-90 active:font-normal transition-all"
            onClick={onSearchClick}
          >
            Search
          </button>
        </div>
      </div>
      {inputValue && (
        <div className="text-center  px-2 w-full">
          {searchResults.map((result: any, index: number) => (
            <div key={index}>
              <h1 className="text-2xl font-bold my-4 text-black uppercase tracking-wider">
                {result.name}
              </h1>
              <div className="flex gap-4 p-4">
                {result.models.map((model: any, index: number) => (
                  <ul key={index} className="flex flex-col gap-4 py-2 px-3 border">
                    <li className="font-bold text-primary">
                      {model.name}
                    </li>
                    <li className="flex items-center gap-2 font-semibold text-gray-600">
                      Alcohol:
                      <p
                        className={`${
                          model.alcohol === "Yes"
                            ? "bg-red-500"
                            : "bg-green-500"
                        } border px-2 text-white text-[14px]`}
                      >
                        {model.alcohol}
                      </p>
                    </li>
                    <li className="flex items-center gap-2 font-semibold text-gray-600">
                      Allergic:
                      <p
                        className={`${
                          model.allergic === "Yes"
                            ? "bg-red-500"
                            : "bg-green-500"
                        } border px-2 text-white text-[14px]`}
                      >
                        {model.allergic}
                      </p>
                    </li>
                    <li className="flex items-center gap-7 font-semibold text-gray-600">
                      Halal:
                      <p
                        className={`${
                          model.halal === "No" ? "bg-red-600" : "bg-green-500"
                        } border px-2 text-white text-[14px]`}
                      >
                        {model.halal}
                      </p>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchProduct;
