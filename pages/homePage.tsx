import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import axios from "axios";

interface Category {
  category: {
    drink: { name: string; model: string };
    food: { name: string; model: string };
    medicin: { name: string; model: string };
    cosmetics: { name: string; model: string };
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
                  <option value="drink">
                    {category.category.drink.name ||
                      category.category.drink.model}
                  </option>
                  <option value="food">
                    {category.category.food.name ||
                      category.category.food.model}
                  </option>
                  <option value="medicin">
                    {category.category.medicin.name ||
                      category.category.medicin.model}
                  </option>
                  <option value="cosmetics">
                    {category.category.cosmetics.name ||
                      category.category.cosmetics.model}
                  </option>
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
