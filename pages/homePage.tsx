import React, { useEffect, useState } from "react";
import MegaCategory from "./components/resource/MegaCategory";
import SearchProduct from "./components/resource/SearchProduct";
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

function HomePage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [searchResults, setSearchResults] = useState<string[]>([]);

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

  const handleSearch = () => {
    const results: string[] = categories.flatMap((category) => {
      const drinkResults = category.category.drink
        .filter((drink) =>
          drink.name.toLowerCase().includes(inputValue.toLowerCase())
        )
        .map((drink) => drink.name)

      const foodResults = category.category.food
        .filter((food) =>
          food.name.toLowerCase().includes(inputValue.toLowerCase())
        )
        .map((food) => food.name);

      const medicineResults = category.category.medicine
        .filter((medicine) =>
          medicine.name.toLowerCase().includes(inputValue.toLowerCase())
        )
        .map((medicine) => medicine.name);

      const cosmeticsResults = category.category.cosmetics
        .filter((cosmetic) =>
          cosmetic.name.toLowerCase().includes(inputValue.toLowerCase())
        )
        .map((cosmetic) => cosmetic.name);

      return [
        ...drinkResults,
        ...foodResults,
        ...medicineResults,
        ...cosmeticsResults,
      ];
    });
    setSearchResults(results);
  };

  return (
    <div className="flex flex-col justify-center items-center p-10">
      <div className="flex flex-col items-center w-[50vw] p-4  mx-auto ">
        <h1 className="text-3xl font-bold mb-6">Search Product</h1>
        <div className="p-6 bg-transparent mb-10">
          <SearchProduct
            handleSearch={handleSearch}
            handleChange={handleChange}
            searchResults={searchResults}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
