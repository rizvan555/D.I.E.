import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import ProductItem from "../../productItem";

interface myResult {
  result: string;
}
interface SearchResult {
  category: string;
  name: string;
  models: { name: string; alcohol: string; allergic: string; halal: string }[];
}
interface Category {
  category: {
    drink: {
      name: string;
      models: [
        {
          name: string;
          alcohol: string;
          allergic: {
            Gluten: string;
            Milk: string;
            Egg: string;
            Nuts: string;
            Sesame: string;
            Wheat: string;
            Fish: string;
          };
          halal: string;
          vegan: string;
          vegetarian: string;
        }
      ];
    }[];
    food: {
      name: string;
      models: [
        {
          name: string;
          alcohol: string;
          allergic: {
            Gluten: string;
            Milk: string;
            Egg: string;
            Nuts: string;
            Sesame: string;
            Wheat: string;
            Fish: string;
          };
          halal: string;
          vegan: string;
          vegetarian: string;
        }
      ];
    }[];
    medicine: {
      name: string;
      models: [
        {
          name: string;
          alcohol: string;
          allergic: {
            Gluten: string;
            Milk: string;
            Egg: string;
            Nuts: string;
            Sesame: string;
            Wheat: string;
            Fish: string;
          };
          halal: string;
          vegan: string;
          vegetarian: string;
        }
      ];
    }[];
    cosmetics: {
      name: string;
      models: [
        {
          name: string;
          alcohol: string;
          allergic: {
            Gluten: string;
            Milk: string;
            Egg: string;
            Nuts: string;
            Sesame: string;
            Wheat: string;
            Fish: string;
          };
          halal: string;
          vegan: string;
          vegetarian: string;
        }
      ];
    }[];
  };
}

function SearchProduct({ handleChange, handleSearch, searchResults }: any) {
  const [inputValue, setInputValue] = useState<string>("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [filteredItems, setFilteredItems] = useState<any[]>([]);

  const onSearchClick = () => {
    handleSearch();
  };

  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  useEffect(() => {
    const getCategory = async () => {
      const response = await axios.get(
        "http://localhost:3001/categories/category"
      );
      setCategories(response.data);
    };
    getCategory();
  }, []);

  const getFiltered = (modelName: string) => {
    const filteredItems: any[] = [];
    categories.forEach((category: any) => {
      category.category.drink.forEach((drink: any) => {
        const filteredModels = drink.models.filter(
          (drinkModel: any) => drinkModel.name === modelName
        );
        {
          filteredModels &&
            filteredItems.push({
              category: drink.name,
              models: filteredModels,
            });
        }
      });
      category.category.food.forEach((food: any) => {
        const filteredModels = food.models.filter(
          (foodModel: any) => foodModel.name === modelName
        );
        {
          filteredModels &&
            filteredItems.push({
              category: food.name,
              models: filteredModels,
            });
        }
      });
      category.category.medicine.forEach((medicine: any) => {
        const filteredModels = medicine.models.filter(
          (medicineModel: any) => medicineModel.name === modelName
        );
        {
          filteredModels &&
            filteredItems.push({
              category: medicine.name,
              models: filteredModels,
            });
        }
      });
      category.category.cosmetics.forEach((cosmetic: any) => {
        const filteredModels = cosmetic.models.filter(
          (cosmeticModel: any) => cosmeticModel.name === modelName
        );
        {
          filteredModels &&
            filteredItems.push({
              category: cosmetic.name,
              models: filteredModels,
            });
        }
      });
    });
    console.log(filteredItems);
    setFilteredItems(filteredItems);
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
        <div className="text-center px-2 w-full">
          {searchResults.map((result: any, index: number) => (
            <div key={index}>
              <h1 className="text-2xl font-bold my-4 text-black uppercase tracking-wider">
                {result.name}
              </h1>
              <div className="flex flex-col">
                <div className="flex gap-4 py-4">
                  {result.models.map((model: any, index: number) => (
                    <div key={index}>
                      <button
                        onClick={() => getFiltered(model.name)}
                        key={index}
                        className="flex flex-col gap-4 py-4 px-4 border model-box"
                      >
                        <div className="font-bold text-primary">
                          {model.name}
                        </div>
                        <div className="flex items-center gap-4 font-semibold text-gray-600 text-start">
                          <h4 className="text-gray-600 w-[7vw]">Alcohol:</h4>
                          <p
                            className={`${
                              model.alcohol === "Yes"
                                ? "bg-red-500"
                                : "bg-green-500"
                            } border px-2 text-white text-[14px]`}
                          >
                            {model.alcohol}
                          </p>
                        </div>
                        <div className="flex items-center gap-4 font-semibold text-gray-600 text-start">
                          <h4 className="text-gray-600 w-[7vw]">Gluten:</h4>
                          <p
                            className={`${
                              model.allergic.Gluten === "Yes"
                                ? "bg-red-500"
                                : "bg-green-500"
                            } border px-2 text-white text-[14px]`}
                          >
                            {model.allergic.Gluten}
                          </p>
                        </div>
                        <div className="flex items-center gap-4 font-semibold text-gray-600 text-start">
                          <h4 className="text-gray-600 w-[7vw]"> Milk:</h4>
                          <p
                            className={`${
                              model.allergic.Milk === "Yes"
                                ? "bg-red-500"
                                : "bg-green-500"
                            } border px-2 text-white text-[14px]`}
                          >
                            {model.allergic.Milk}
                          </p>
                        </div>
                        <div className="flex items-center gap-4 font-semibold text-gray-600 text-start">
                          <h4 className="text-gray-600 w-[7vw]"> Egg:</h4>
                          <p
                            className={`${
                              model.allergic.Egg === "Yes"
                                ? "bg-red-500"
                                : "bg-green-500"
                            } border px-2 text-white text-[14px]`}
                          >
                            {model.allergic.Egg}
                          </p>
                        </div>
                        <div className="flex items-center gap-4 font-semibold text-gray-600 text-start">
                          <h4 className="text-gray-600 w-[7vw]"> Nuts:</h4>
                          <p
                            className={`${
                              model.allergic.Nuts === "Yes"
                                ? "bg-red-500"
                                : "bg-green-500"
                            } border px-2 text-white text-[14px]`}
                          >
                            {model.allergic.Nuts}
                          </p>
                        </div>
                        <div className="flex items-center gap-4 font-semibold text-gray-600 text-start">
                          <h4 className="text-gray-600 w-[7vw]"> Sesame:</h4>
                          <p
                            className={`${
                              model.allergic.Sesame === "Yes"
                                ? "bg-red-500"
                                : "bg-green-500"
                            } border px-2 text-white text-[14px]`}
                          >
                            {model.allergic.Sesame}
                          </p>
                        </div>
                        <div className="flex items-center gap-4 font-semibold text-gray-600 text-start">
                          <h4 className="text-gray-600 w-[7vw]"> Wheat:</h4>
                          <p
                            className={`${
                              model.allergic.Wheat === "Yes"
                                ? "bg-red-500"
                                : "bg-green-500"
                            } border px-2 text-white text-[14px]`}
                          >
                            {model.allergic.Wheat}
                          </p>
                        </div>
                        <div className="flex items-center gap-4 font-semibold text-gray-600 text-start">
                          <h4 className="text-gray-600 w-[7vw]"> Nuts:</h4>
                          <p
                            className={`${
                              model.allergic.Nuts === "Yes"
                                ? "bg-red-500"
                                : "bg-green-500"
                            } border px-2 text-white text-[14px]`}
                          >
                            {model.allergic.Nuts}
                          </p>
                        </div>
                        <div className="flex items-center gap-4 font-semibold text-gray-600 text-start">
                          <h4 className="text-gray-600 w-[7vw]"> Halal:</h4>
                          <p
                            className={`${
                              model.halal === "No"
                                ? "bg-red-600"
                                : "bg-green-500"
                            } border px-2 text-white text-[14px]`}
                          >
                            {model.halal}
                          </p>
                        </div>
                        <div className="flex items-center gap-4 font-semibold text-gray-600 text-start">
                          <h4 className="text-gray-600 w-[7vw]"> Vegan:</h4>
                          <p
                            className={`${
                              model.halal === "No"
                                ? "bg-red-600"
                                : "bg-green-500"
                            } border px-2 text-white text-[14px]`}
                          >
                            {model.vegan}
                          </p>
                        </div>
                        <div className="flex items-center gap-4 font-semibold text-gray-600 text-start">
                          <h4 className="text-gray-600 w-[7vw]">
                            {" "}
                            Vegetarian:
                          </h4>
                          <p
                            className={`${
                              model.halal === "No"
                                ? "bg-red-600"
                                : "bg-green-500"
                            } border px-2 text-white text-[14px]`}
                          >
                            {model.vegetarian}
                          </p>
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
                <div className="">
                  <ProductItem filteredItems={filteredItems} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchProduct;
