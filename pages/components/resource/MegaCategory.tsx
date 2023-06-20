import axios from "axios";
import React, { useEffect, useState } from "react";

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

function MegaCategory() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [clickCategory, setClickCategory] = useState<string>("");
  const [clickCategoryModel, setClickCategoryModel] = useState<string>("");
  const [clickFood, setClickFood] = useState<string>("");
  const [clickMedicine, setClickMedicine] = useState<string>("");
  const [clickCosmetics, setClickCosmetics] = useState<string>("");
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

  const handleClickDrink = (drinkName: string) => {
    setClickCategory(drinkName === clickCategory ? "" : drinkName);
    setClickFood("");
    setClickMedicine("");
  };
  const handleClickFood = (foodName: string) => {
    setClickFood(foodName === clickFood ? "" : foodName);
    setClickMedicine("");
    setClickCategory("");
  };

  const handleClickMedicine = (mediName: string) => {
    setClickMedicine(mediName === clickMedicine ? "" : mediName);
    setClickFood("");
    setClickCategory("");
  };

  const handleClickCosmetics = (cosmeticName: string) => {
    setClickCosmetics(cosmeticName === clickCosmetics ? "" : cosmeticName);
    setClickFood("");
    setClickCategory("");
    setClickMedicine("");
  };

  return (
    <div className="mt-16">
      <button
        onClick={() => setHandleCategory(!handleCategory)}
        className="text-2xl border-b font-bold"
      >
        CATEGORIES
      </button>
      {handleCategory ? (
        <div className="flex gap-8 py-2">
          {categories.map((category, index) => {
            return (
              <div key={index} className="">
                {category.category.drink.map((drink, index) => (
                  <div key={index}>
                    <div className="pl-2">
                      <button
                        onClick={() => handleClickDrink(drink.name)}
                        className="text-l text-gray-700 font-bold tracking-wide"
                      >
                        {drink.name}
                      </button>
                    </div>

                    {clickCategory === drink.name &&
                      drink.models.map((model, index) => (
                        <div key={index} className="relative">
                          <div className="pl-4 py-1">
                            <button
                              onClick={() => {
                                {
                                  clickCategoryModel === model.name
                                    ? setClickCategoryModel("")
                                    : setClickCategoryModel(model.name);
                                }
                              }}
                              className=""
                            >
                              {model.name}
                            </button>
                          </div>
                          {clickCategoryModel === model.name && (
                            <div className="pl-6">
                              <div>
                                <button className="text-gray-400">{`alcohol: ${model.alcohol}`}</button>
                              </div>
                              <div>
                                <button className="text-gray-400">{`allergic: ${model.allergic}`}</button>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                ))}

                {category.category.food.map((food, index) => (
                  <div key={index}>
                    <div className="pl-2">
                      <button
                        onClick={() => handleClickFood(food.name)}
                        className="text-l text-gray-700 font-bold tracking-wide"
                      >
                        {food.name}
                      </button>
                    </div>
                    {clickFood === food.name &&
                      food.models.map((model, index) => (
                        <div key={index} className="pl-4">
                          <button
                            onClick={() => {
                              clickCategoryModel === model.name
                                ? setClickCategoryModel("")
                                : setClickCategoryModel(model.name);
                            }}
                          >
                            {model.name}
                          </button>
                          {clickCategoryModel === model.name && (
                            <div className="pl-5">
                              <div>
                                <button className="text-gray-400">{`alcohol: ${model.alcohol}`}</button>
                              </div>
                              <div>
                                <button className="text-gray-400">{`allergic: ${model.allergic}`}</button>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                ))}

                {category.category.medicine.map((medi, index) => (
                  <div key={index} className="pl-2">
                    <div className="">
                      <button
                        onClick={() => handleClickMedicine(medi.name)}
                        className="text-l text-gray-700 font-bold tracking-wide"
                      >
                        {medi.name}
                      </button>
                    </div>
                    {clickMedicine
                      ? medi.models.map((model, index) => (
                          <div key={index} className="pl-4">
                            <button
                              onClick={() => {
                                clickCategoryModel === model.name
                                  ? setClickCategoryModel("")
                                  : setClickCategoryModel(model.name);
                              }}
                            >
                              {model.name}
                            </button>
                            {clickCategoryModel === model.name && (
                              <div className="pl-5">
                                <div>
                                  <button className="text-gray-400">{`alcohol: ${model.alcohol}`}</button>
                                </div>
                                <div>
                                  <button className="text-gray-400">{`allergic: ${model.allergic}`}</button>
                                </div>
                              </div>
                            )}
                          </div>
                        ))
                      : ""}
                  </div>
                ))}

                {category.category.cosmetics.map((cosmetic, index) => (
                  <div key={index} className="pl-2">
                    <div className="">
                      <button
                        onClick={() => handleClickCosmetics(cosmetic.name)}
                        className="text-l text-gray-700 font-bold tracking-wide"
                      >
                        {cosmetic.name}
                      </button>
                    </div>
                    {clickCosmetics
                      ? cosmetic.models.map((model, index) => (
                          <div key={index} className="pl-4">
                            <button
                              onClick={() => {
                                clickCategoryModel === model.name
                                  ? setClickCategoryModel("")
                                  : setClickCategoryModel(model.name);
                              }}
                            >
                              {model.name}
                            </button>
                            {clickCategoryModel === model.name && (
                              <div className="pl-5">
                                <div>
                                  <button className="text-gray-400">{`alcohol: ${model.alcohol}`}</button>
                                </div>
                                <div>
                                  <button className="text-gray-400">{`allergic: ${model.allergic}`}</button>
                                </div>
                              </div>
                            )}
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
