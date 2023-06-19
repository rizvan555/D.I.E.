import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import axios from "axios";

interface Category {
  category: {
    drink: { name: string; model: string }[];
    food: { name: string; model: string }[];
    medicin: { name: string; model: string }[];
    cosmetics: { name: string; model: string }[];
  };
}

function HomePage() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/categories/category"
        );
        console.log(response.data);
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategory();
  }, []);

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
            {categories.map((category, index) => {
              return (
                <select
                  className="w-[25vw] border-b py-2 focus:outline-0 text-xl"
                  key={index}
                >
                  {category.category.drink.map((drink, index) => (
                    <optgroup key={index} label="Drink">
                      <option value={drink.name}>{drink.name}</option>
                      <option value={drink.model}>{drink.model}</option>
                    </optgroup>
                  ))}
                  {category.category.food.map((food, index) => (
                    <optgroup key={index} label="Food">
                      <option value={food.name}>{food.name}</option>
                      <option value={food.model}>{food.model}</option>
                    </optgroup>
                  ))}
                  {category.category.medicin.map((medicin, index) => (
                    <optgroup key={index} label="Medicin">
                      <option value={medicin.name}>{medicin.name}</option>
                      <option value={medicin.model}>{medicin.model}</option>
                    </optgroup>
                  ))}
                  {category.category.cosmetics.map((cosmetics, index) => (
                    <optgroup key={index} label="Cosmetics">
                      <option value={cosmetics.name}>{cosmetics.name}</option>
                      <option value={cosmetics.model}>{cosmetics.model}</option>
                    </optgroup>
                  ))}
                </select>
              );
            })}

            <select className="w-[25vw] border-b focus:outline-0 text-xl">
              <option value="">Brand / Marke</option>
            </select>
          </div>
        </div>
      </form>
      <button className="border px-8 py-2 bg-primary text-white text-xl tracking-wider font-bold active:scale-90 active:font-normal transition-all w-[20vw]">
        Search
      </button>
    </div>
  );
}

export default HomePage;
