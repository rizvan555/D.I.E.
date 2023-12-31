import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import SearchProduct from './SearchProduct';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Category {
  category: {
    drink: {
      name: string;
      models: [
        {
          name: string;
          img: string;
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
          img: string;
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
          img: string;
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
          img: string;
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

const HomePage: NextPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getCategory = async () => {
      const response = await axios.get(
        'http://localhost:3001/categories/category'
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
          drink.models.some((model) =>
            model.name.toLowerCase().includes(inputValue.toLowerCase())
          )
        )
        .map((drink) => {
          const filteredModels = drink.models.filter((model) =>
            model.name.toLowerCase().includes(inputValue.toLowerCase())
          );
          return {
            category: 'Drink',
            name: drink.name,
            models: filteredModels.map((drinkModel) => ({
              name: drinkModel.name,
              img: drinkModel.img,
              alcohol: drinkModel.alcohol,
              allergic: drinkModel.allergic,
              halal: drinkModel.halal,
              vegan: drinkModel.vegan,
              vegetarian: drinkModel.vegetarian,
            })),
          };
        });

      const foodResults = category.category.food
        .filter((food) =>
          food.models.some((model) =>
            model.name.toLowerCase().includes(inputValue.toLowerCase())
          )
        )
        .map((food) => {
          const filteredModels = food.models.filter((model) =>
            model.name.toLowerCase().includes(inputValue.toLowerCase())
          );
          return {
            category: 'Food',
            name: food.name,
            models: filteredModels.map((foodModel) => ({
              name: foodModel.name,
              img: foodModel.img,
              alcohol: foodModel.alcohol,
              allergic: foodModel.allergic,
              halal: foodModel.halal,
              vegan: foodModel.vegan,
              vegetarian: foodModel.vegetarian,
            })),
          };
        });

      const medicineResults = category.category.medicine
        .filter((medicine) =>
          medicine.models.find((medicineModel) =>
            medicineModel.name.toLowerCase().includes(inputValue.toLowerCase())
          )
        )
        .map((medicine) => {
          const filteredModels = medicine.models.filter((model) =>
            model.name.toLowerCase().includes(inputValue.toLowerCase())
          );
          return {
            category: 'Medicine',
            name: medicine.name,
            models: filteredModels.map((medicinModel) => ({
              name: medicinModel.name,
              img: medicinModel.img,
              alcohol: medicinModel.alcohol,
              allergic: medicinModel.allergic,
              halal: medicinModel.halal,
              vegan: medicinModel.vegan,
              vegetarian: medicinModel.vegetarian,
            })),
          };
        });

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
        .map((cosmetic) => {
          const filteredModels = cosmetic.models.filter((model) =>
            model.name.toLowerCase().includes(inputValue.toLowerCase())
          );
          return {
            category: 'Medicine',
            name: cosmetic.name,
            models: filteredModels.map((cosmeticModel) => ({
              name: cosmeticModel.name,
              img: cosmeticModel.img,
              alcohol: cosmeticModel.alcohol,
              allergic: cosmeticModel.allergic,
              halal: cosmeticModel.halal,
              vegan: cosmeticModel.vegan,
              vegetarian: cosmeticModel.vegetarian,
            })),
          };
        });

      return [
        ...drinkResults,
        ...foodResults,
        ...medicineResults,
        ...cosmeticsResults,
      ];
    });
    setSearchResults(results);

    // -----path endpoind change-----
    const searchResult = inputValue.toLowerCase();
    router.push({
      pathname: router.pathname,
      query: { searchResult },
    });
  };

  return (
    <div className="flex flex-col justify-center items-center p-10">
      <div className="flex flex-col items-center w-[50vw] p-4  mx-auto ">
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
};

export default HomePage;
