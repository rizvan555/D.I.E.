import axios from "axios";
import { modelNames } from "mongoose";
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
    medicin: {
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
  const [clickDrink, setClickDrink] = useState<string>("");
  const [clickCategoryModel, setClickCategoryModel] = useState<string>("");
  const [clickFood, setClickFood] = useState(false);
  const [clickMedicin, setClickMedicin] = useState(false);
  const [clickCosmetics, setClickCosmetics] = useState(false);
  const [clickModel, setClickModel] = useState(false);
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
  const handleClickModel = (modelName: string) => {
    setClickCategoryModel(modelName);
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
        <div className="flex gap-8 ">
          {categories.map((category, index) => {
            return (
              <div key={index} className="">
                {category.category.drink.map((drink, index) => (
                  <div key={index}>
                    <div className="">
                      <button
                        onClick={() => handleClick(drink.name)}
                        className="text-xl text-gray-700 font-bold"
                      >
                        {drink.name}
                      </button>
                    </div>
                    {clickDrink === drink.name &&
                      drink.models.map((model, index) => (
                        <div key={index}>
                          <button onClick={() => handleClickModel(model.name)}>
                            {model.name}
                          </button>
                          {clickCategoryModel === model.name && (
                            <div>
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
                    <div className="">
                      <button
                        onClick={() => setClickFood(!clickFood)}
                        className="text-xl text-gray-700 font-bold"
                      >
                        {food.name}
                      </button>
                    </div>
                    {clickFood &&
                      food.models.map((model, index) => (
                        <div key={index}>
                          <button onClick={() => handleClickModel(model.name)}>
                            {model.name}
                          </button>
                          {clickCategoryModel === model.name && (
                            <div>
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

                {category.category.medicin.map((medi, index) => (
                  <div key={index}>
                    <div className="">
                      <button
                        onClick={() => setClickMedicin(!clickMedicin)}
                        className="text-xl text-gray-700 font-bold"
                      >
                        {medi.name}
                      </button>
                    </div>
                    {clickMedicin
                      ? medi.models.map((model, index) => (
                          <div key={index}>
                            <button
                              onClick={() => handleClickModel(model.name)}
                            >
                              {model.name}
                            </button>
                            {clickCategoryModel === model.name && (
                              <div>
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
                  <div key={index}>
                    <div className="">
                      <button
                        onClick={() => setClickCosmetics(!clickCosmetics)}
                        className="text-xl text-gray-700 font-bold"
                      >
                        {cosmetic.name}
                      </button>
                    </div>
                    {clickCosmetics
                      ? cosmetic.models.map((model, index) => (
                          <div key={index}>
                            <button
                              onClick={() => handleClickModel(model.name)}
                            >
                              {model.name}
                            </button>
                            {clickCategoryModel === model.name && (
                              <div>
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
