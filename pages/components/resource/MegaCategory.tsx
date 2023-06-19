import axios from "axios";
import React, { useEffect, useState } from "react";

interface Category {
  category: {
    drink: { name: string; models: string[] }[];
    food: { name: string; models: string[] }[];
    medicin: { name: string; models: string[] }[];
    cosmetics: { name: string; models: string[] }[];
  };
}

function MegaCategory() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [clickDrink, setClickDrink] = useState<string>("");
  const [clickFood, setClickFood] = useState(false);
  const [clickMedicin, setClickMedicin] = useState(false);
  const [clickCosmetics, setClickCosmetics] = useState(false);
  const [handleCategory, setHandleCategory] = useState(false);

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

  const handleClick = (drinkName: string) => {
    setClickDrink(drinkName);
  };

  return (
    <div className="mt-16">
      <button
        onClick={() => setHandleCategory(!handleCategory)}
        className="text-xl border-b"
      >
        Categories
      </button>
      {handleCategory ? (
        <div className="flex gap-8 text-gray-500 ">
          {categories.map((category, index) => {
            return (
              <div key={index} className="">
                {category.category.drink.map((drink, index) => (
                  <div key={index}>
                    <div className="">
                      <button
                        onClick={() => handleClick(drink.name)}
                        className="font-bold text-xl"
                      >
                        {drink.name}
                      </button>
                    </div>
                    {clickDrink === drink.name &&
                      drink.models.map((model, index) => (
                        <div key={index}>
                          <button>{model}</button>
                        </div>
                      ))}
                  </div>
                ))}

                {category.category.food.map((food, index) => (
                  <div key={index}>
                    <div className="">
                      <button
                        onClick={() => setClickFood(!clickFood)}
                        className="font-bold text-xl"
                      >
                        {food.name}
                      </button>
                    </div>
                    {clickFood
                      ? food.models.map((model, index) => (
                          <div key={index}>
                            <button>{model}</button>
                          </div>
                        ))
                      : ""}
                  </div>
                ))}

                {category.category.medicin.map((medi, index) => (
                  <div key={index}>
                    <div className="">
                      <button
                        onClick={() => setClickMedicin(!clickMedicin)}
                        className="font-bold text-xl"
                      >
                        {medi.name}
                      </button>
                    </div>
                    {clickMedicin
                      ? medi.models.map((model, index) => (
                          <div key={index}>
                            <button>{model}</button>
                          </div>
                        ))
                      : ""}
                  </div>
                ))}

                {category.category.cosmetics.map((cosmetic, index) => (
                  <div key={index}>
                    <div className="">
                      <button
                        onClick={() => setClickCosmetics(!clickCosmetics)}
                        className="font-bold text-xl"
                      >
                        {cosmetic.name}
                      </button>
                    </div>
                    {clickCosmetics
                      ? cosmetic.models.map((model, index) => (
                          <div key={index}>
                            <button>{model}</button>
                          </div>
                        ))
                      : ""}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default MegaCategory;
