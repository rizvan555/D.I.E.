import React, { useEffect, useState } from "react";
import SearchProduct from "./components/resource/SearchProduct";
import axios from "axios";

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
        .filter(
          (drink) =>
            drink.name.toLowerCase().includes(inputValue.toLowerCase()) ||
            drink.models.some((model) =>
              model.name.toLowerCase().includes(inputValue.toLowerCase())
            )
        )
        .map((drink) => {
          const filteredModels = drink.models.filter((model) =>
            model.name.toLowerCase().includes(inputValue.toLowerCase())
          );
          return {
            category: "Drink",
            name: drink.name,
            models: filteredModels.map((drinkModel) => ({
              name: drinkModel.name,
              alcohol: drinkModel.alcohol,
              allergic: drinkModel.allergic,
              halal: drinkModel.halal,
              vegan: drinkModel.vegan,
              vegetarian: drinkModel.vegetarian,
            })),
          };
        });

      const foodResults = category.category.food
        .filter(
          (food) =>
            food.name.toLowerCase().includes(inputValue.toLowerCase()) ||
            food.models.find((model) =>
              model.name.toLowerCase().includes(inputValue.toLowerCase())
            )
        )
        .map((food) => ({
          category: "Food",
          name: food.name,
          models: food.models.map((foodModel) => ({
            name: foodModel.name,
            alcohol: foodModel.alcohol,
            allergic: foodModel.allergic,
            halal: foodModel.halal,
            vegan: foodModel.vegan,
            vegetarian: foodModel.vegetarian,
          })),
        }));

      const medicineResults = category.category.medicine
        .filter(
          (medicine) =>
            medicine.name.toLowerCase().includes(inputValue.toLowerCase()) ||
            medicine.models.find((medicineModel) =>
              medicineModel.name
                .toLowerCase()
                .includes(inputValue.toLowerCase())
            )
        )
        .map((medicine) => ({
          category: "Medicine",
          name: medicine.name,
          models: medicine.models.map((medicineModel) => ({
            name: medicineModel.name,
            alcohol: medicineModel.alcohol,
            allergic: medicineModel.allergic,
            halal: medicineModel.halal,
            vegan: medicineModel.vegan,
            vegetarian: medicineModel.vegetarian,
          })),
        }));

      const cosmeticsResults = category.category.cosmetics
        .filter(
          (cosmetic) =>
            cosmetic.name.toLowerCase().includes(inputValue.toLowerCase()) ||
            cosmetic.models.find((cosmeticModel) =>
              cosmeticModel.name
                .toLowerCase()
                .includes(inputValue.toLowerCase())
            )
        )
        .map((cosmetic) => ({
          category: "Cosmetics",
          name: cosmetic.name,
          models: cosmetic.models.map((cosmeticModel) => ({
            name: cosmeticModel.name,
            alcohol: cosmeticModel.alcohol,
            allergic: cosmeticModel.allergic,
            halal: cosmeticModel.halal,
            vegan: cosmeticModel.vegan,
            vegetarian: cosmeticModel.vegetarian,
          })),
        }));

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
