import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import axios from "axios";

interface Category {
  category: {
    drink: {
      name: string;
      models: [{ name: string; alcohol: string; allergic: string }];
    }[];
    food: {
      name: string;
      models: [{ name: string; alcohol: string; allergic: string }];
    }[];
    medicine: {
      name: string;
      models: [{ name: string; alcohol: string; allergic: string }];
    }[];
    cosmetics: {
      name: string;
      models: [{ name: string; alcohol: string; allergic: string }];
    }[];
  };
}

function SearchProduct() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    const getCategory = async () => {
      const response = await axios.get(
        "http://localhost:3001/categories/category"
      );
      setCategories(response.data);
    };
    getCategory();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex items-center gap-2 border-b mb-8 text-xl ">
      <BiSearchAlt size={30} />
      <input
        type="text"
        className="w-[50vw] p-4 focus:outline-0 "
        placeholder="Search"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchProduct;
