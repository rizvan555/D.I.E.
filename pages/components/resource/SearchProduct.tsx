import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

interface myResult {
  result: string;
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
      <div>
        {searchResults.map((result: any, index: number) => (
          <div key={index}>{result}</div>
        ))}
      </div>
    </div>
  );
}

export default SearchProduct;
