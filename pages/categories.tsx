import axios from "axios";
import React, { useEffect, useState } from "react";
interface Category {
  categoryName: {
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

function Categories() {
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
          "http://localhost:3001/categories/categorypages"
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
    setClickCosmetics("");
  };
  const handleClickFood = (foodName: string) => {
    setClickFood(foodName === clickFood ? "" : foodName);
    setClickMedicine("");
    setClickCategory("");
    setClickCosmetics("");
  };
  const handleClickMedicine = (mediName: string) => {
    setClickMedicine(mediName === clickMedicine ? "" : mediName);
    setClickFood("");
    setClickCategory("");
    setClickCosmetics("");
  };
  const handleClickCosmetics = (cosmeticName: string) => {
    setClickCosmetics(cosmeticName === clickCosmetics ? "" : cosmeticName);
    setClickFood("");
    setClickCategory("");
    setClickMedicine("");
  };

  return (
    <div className="text-center my-6 h-[100vh]">
      <button
        onClick={() => setHandleCategory(!handleCategory)}
        className="text-5xl font-bold mb-12 tracking-wider"
      >
        CATEGORIES
      </button>
      <div className="flex gap-8 py-2 justify-center">
        {categories.map((category, index) => {
          return (
            <div key={index} className="flex justify-center gap-24">
              {category.categoryName.drink.map((drink, index) => (
                <div key={index}>
                  <div className="flex flex-col items-center justify-center py-2 px-6 gap-3 w-[15vw]">
                    <div className="w-[15vw]">
                      <button
                        onClick={() => handleClickDrink(drink.name)}
                        className="text-2xl text-gray-600 font-bold tracking-wider mb-6 border-b"
                      >
                        {drink.name}
                      </button>
                    </div>

                    {drink.models.map((model, index) => (
                      <div
                        key={index}
                        className="px-4 w-60 text-start font-semibold "
                      >
                        <div className="mb-4">
                          <button
                            onClick={() => {
                              {
                                clickCategoryModel === model.name
                                  ? setClickCategoryModel("")
                                  : setClickCategoryModel(model.name);
                              }
                            }}
                            className="hover:underline"
                          >
                            {model.name}
                          </button>
                        </div>
                        {clickCategoryModel === model.name && (
                          <div className=" text-start text-white">
                            <div className="">
                              <button className="flex gap-12 px-4 text-start  mb-2">
                                <p className="w-20 text-gray-600 hover:underline font-normal">
                                  Alcohol:
                                </p>
                                <p
                                  className={`${
                                    model.alcohol === "No"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }  px-2 `}
                                >{` ${model.alcohol}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex gap-12 px-4  text-start mb-2">
                                <p className="w-20 text-gray-600 hover:underline font-normal">
                                  Gluten:
                                </p>
                                <p
                                  className={`${
                                    model.allergic.Gluten === "No"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }  px-2`}
                                >{` ${model.allergic.Gluten}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex gap-12 px-4  text-start mb-2 ">
                                <p className="w-20 text-gray-600 hover:underline font-normal">
                                  Milk:{" "}
                                </p>
                                <p
                                  className={`${
                                    model.allergic.Milk === "No"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }  px-2`}
                                >{` ${model.allergic.Milk}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex gap-12 px-4  text-start mb-2">
                                <p className="w-20 text-gray-600 hover:underline font-normal">
                                  Egg:{" "}
                                </p>
                                <p
                                  className={`${
                                    model.allergic.Egg === "No"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }  px-2`}
                                >{` ${model.allergic.Egg}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex gap-12 px-4  text-start mb-2">
                                <p className="w-20 text-gray-600 hover:underline font-normal">
                                  Nuts:{" "}
                                </p>
                                <p
                                  className={`${
                                    model.allergic.Nuts === "No"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }  px-2`}
                                >{` ${model.allergic.Nuts}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex gap-12 px-4  text-start mb-2">
                                <p className="w-20 text-gray-600 hover:underline font-normal">
                                  Sesame:{" "}
                                </p>
                                <p
                                  className={`${
                                    model.allergic.Sesame === "No"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }  px-2`}
                                >{` ${model.allergic.Sesame}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex gap-12 px-4  text-start mb-2">
                                <p className="w-20 text-gray-600 hover:underline font-normal">
                                  Wheat:{" "}
                                </p>
                                <p
                                  className={`${
                                    model.allergic.Wheat === "No"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }  px-2`}
                                >{` ${model.allergic.Wheat}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex gap-12 px-4  text-start mb-2">
                                <p className="w-20 text-gray-600 hover:underline font-normal">
                                  Fish:{" "}
                                </p>
                                <p
                                  className={`${
                                    model.allergic.Fish === "No"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }  px-2`}
                                >{` ${model.allergic.Fish}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex gap-12 px-4  text-start mb-2">
                                <p className="w-20 text-gray-600 hover:underline font-normal">
                                  Halal:{" "}
                                </p>
                                <p
                                  className={`${
                                    model.halal === "Yes"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }  px-2`}
                                >{` ${model.halal}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex justify-between gap-12 px-4  text-start mb-2">
                                <p className="w-20 text-gray-600 hover:underline font-normal">
                                  Vegan:{" "}
                                </p>
                                <p
                                  className={`${
                                    model.vegan === "Yes"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }  px-2`}
                                >{` ${model.vegan}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex gap-12 px-4  text-start mb-2">
                                <p className="w-20 text-gray-600 hover:underline font-normal">
                                  Vegetarian:{" "}
                                </p>
                                <p
                                  className={`${
                                    model.vegetarian === "Yes"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }  px-2`}
                                >{` ${model.vegetarian}`}</p>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {category.categoryName.food.map((food, index) => (
                <div key={index}>
                  <div className="flex flex-col items-center justify-center py-2 px-6 gap-3 w-[15vw]">
                    <div className="w-[15vw]">
                      <button
                        onClick={() => handleClickFood(food.name)}
                        className="text-2xl text-gray-600 hover:underline font-bold tracking-wider mb-6 border-b"
                      >
                        {food.name}
                      </button>
                    </div>
                    {food.models.map((model, index) => (
                      <div
                        key={index}
                        className="px-4  w-60  text-center font-semibold "
                      >
                        <button
                          onClick={() => {
                            clickCategoryModel === model.name
                              ? setClickCategoryModel("")
                              : setClickCategoryModel(model.name);
                          }}
                          className="mb-4 hover:underline"
                        >
                          {model.name}
                        </button>
                        {clickCategoryModel === model.name && (
                          <div className=" text-start text-white">
                            <div className="">
                              <button className="flex gap-12 px-4 text-start  mb-2">
                                <p className="w-20 text-gray-600 hover:underline font-normal">
                                  Alcohol:
                                </p>
                                <p
                                  className={`${
                                    model.alcohol === "No"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }  px-2`}
                                >{` ${model.alcohol}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex gap-12 px-4  text-start mb-2">
                                <p className="w-20 text-gray-600 hover:underline font-normal">
                                  Gluten:
                                </p>
                                <p
                                  className={`${
                                    model.allergic.Gluten === "No"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }  px-2`}
                                >{` ${model.allergic.Gluten}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex gap-12 px-4  text-start mb-2 ">
                                <p className="w-20 text-gray-600 hover:underline font-normal">
                                  Milk:{" "}
                                </p>
                                <p
                                  className={`${
                                    model.allergic.Milk === "No"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }  px-2`}
                                >{` ${model.allergic.Milk}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex gap-12 px-4  text-start mb-2">
                                <p className="w-20 text-gray-600 hover:underline font-normal">
                                  Egg:{" "}
                                </p>
                                <p
                                  className={`${
                                    model.allergic.Egg === "No"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }  px-2`}
                                >{` ${model.allergic.Egg}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex gap-12 px-4  text-start mb-2">
                                <p className="w-20 text-gray-600 hover:underline font-normal">
                                  Nuts:{" "}
                                </p>
                                <p
                                  className={`${
                                    model.allergic.Nuts === "No"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }  px-2`}
                                >{` ${model.allergic.Nuts}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex gap-12 px-4  text-start mb-2">
                                <p className="w-20 text-gray-600 hover:underline font-normal">
                                  Sesame:{" "}
                                </p>
                                <p
                                  className={`${
                                    model.allergic.Sesame === "No"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }  px-2`}
                                >{` ${model.allergic.Sesame}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex gap-12 px-4  text-start mb-2">
                                <p className="w-20 text-gray-600 hover:underline font-normal">
                                  Wheat:{" "}
                                </p>
                                <p
                                  className={`${
                                    model.allergic.Wheat === "No"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }  px-2`}
                                >{` ${model.allergic.Wheat}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex gap-12 px-4  text-start mb-2">
                                <p className="w-20 text-gray-600 hover:underline font-normal">
                                  Fish:{" "}
                                </p>
                                <p
                                  className={`${
                                    model.allergic.Fish === "No"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }  px-2`}
                                >{` ${model.allergic.Fish}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex gap-12 px-4  text-start mb-2">
                                <p className="w-20 text-gray-600 hover:underline font-normal">
                                  Halal:{" "}
                                </p>
                                <p
                                  className={`${
                                    model.halal === "Yes"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }  px-2`}
                                >{` ${model.halal}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex justify-between gap-12 px-4  text-start mb-2">
                                <p className="w-20 text-gray-600 hover:underline font-normal">
                                  Vegan:{" "}
                                </p>
                                <p
                                  className={`${
                                    model.vegan === "Yes"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }  px-2`}
                                >{` ${model.vegan}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex gap-12 px-4  text-start mb-2">
                                <p className="w-20 text-gray-600 hover:underline font-normal">
                                  Vegetarian:{" "}
                                </p>
                                <p
                                  className={`${
                                    model.vegetarian === "Yes"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }  px-2`}
                                >{` ${model.vegetarian}`}</p>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {category.categoryName.medicine.map((medi, index) => (
                <div key={index}>
                  <div>
                    <div className="flex flex-col items-center justify-center  py-2 px-6 gap-3 w-[15vw]">
                      <div className="w-[15vw]">
                        <button
                          onClick={() => handleClickMedicine(medi.name)}
                          className="text-2xl text-gray-600 hover:underline font-bold tracking-wider mb-6 border-b"
                        >
                          {medi.name}
                        </button>
                      </div>
                      {medi.models.map((model, index) => (
                        <div
                          key={index}
                          className="px-4 w-60  text-center font-semibold"
                        >
                          <button
                            onClick={() => {
                              clickCategoryModel === model.name
                                ? setClickCategoryModel("")
                                : setClickCategoryModel(model.name);
                            }}
                            className="mb-4 hover:underline "
                          >
                            {model.name}
                          </button>
                          {clickCategoryModel === model.name && (
                            <div className=" text-start text-white ">
                              <div className="">
                                <button className="flex gap-12 px-4 text-start  mb-2">
                                  <p className="w-20 text-gray-600 hover:underline font-normal ">
                                    Alcohol:
                                  </p>
                                  <p
                                    className={`${
                                      model.alcohol === "No"
                                        ? "text-green-500"
                                        : "text-red-500"
                                    } px-2`}
                                  >{` ${model.alcohol}`}</p>
                                </button>
                              </div>
                              <div>
                                <button className=" flex gap-12 px-4  text-start mb-2">
                                  <p className="w-20 text-gray-600 hover:underline font-normal">
                                    Gluten:
                                  </p>
                                  <p
                                    className={`${
                                      model.allergic.Gluten === "No"
                                        ? "text-green-500"
                                        : "text-red-500"
                                    } px-2`}
                                  >{` ${model.allergic.Gluten}`}</p>
                                </button>
                              </div>
                              <div>
                                <button className=" flex gap-12 px-4  text-start mb-2 ">
                                  <p className="w-20 text-gray-600 hover:underline font-normal">
                                    Milk:{" "}
                                  </p>
                                  <p
                                    className={`${
                                      model.allergic.Milk === "No"
                                        ? "text-green-500"
                                        : "text-red-500"
                                    } px-2`}
                                  >{` ${model.allergic.Milk}`}</p>
                                </button>
                              </div>
                              <div>
                                <button className=" flex gap-12 px-4  text-start mb-2">
                                  <p className="w-20 text-gray-600 hover:underline font-normal">
                                    Egg:{" "}
                                  </p>
                                  <p
                                    className={`${
                                      model.allergic.Egg === "No"
                                        ? "text-green-500"
                                        : "text-red-500"
                                    } px-2`}
                                  >{` ${model.allergic.Egg}`}</p>
                                </button>
                              </div>
                              <div>
                                <button className=" flex gap-12 px-4  text-start mb-2">
                                  <p className="w-20 text-gray-600 hover:underline font-normal">
                                    Nuts:{" "}
                                  </p>
                                  <p
                                    className={`${
                                      model.allergic.Nuts === "No"
                                        ? "text-green-500"
                                        : "text-red-500"
                                    } px-2`}
                                  >{` ${model.allergic.Nuts}`}</p>
                                </button>
                              </div>
                              <div>
                                <button className=" flex gap-12 px-4  text-start mb-2">
                                  <p className="w-20 text-gray-600 hover:underline font-normal">
                                    Sesame:{" "}
                                  </p>
                                  <p
                                    className={`${
                                      model.allergic.Sesame === "No"
                                        ? "text-green-500"
                                        : "text-red-500"
                                    } px-2`}
                                  >{` ${model.allergic.Sesame}`}</p>
                                </button>
                              </div>
                              <div>
                                <button className=" flex gap-12 px-4  text-start mb-2">
                                  <p className="w-20 text-gray-600 hover:underline font-normal">
                                    Wheat:{" "}
                                  </p>
                                  <p
                                    className={`${
                                      model.allergic.Wheat === "No"
                                        ? "text-green-500"
                                        : "text-red-500"
                                    } px-2`}
                                  >{` ${model.allergic.Wheat}`}</p>
                                </button>
                              </div>
                              <div>
                                <button className=" flex gap-12 px-4  text-start mb-2">
                                  <p className="w-20 text-gray-600 hover:underline font-normal">
                                    Fish:{" "}
                                  </p>
                                  <p
                                    className={`${
                                      model.allergic.Fish === "No"
                                        ? "text-green-500"
                                        : "text-red-500"
                                    } px-2`}
                                  >{` ${model.allergic.Fish}`}</p>
                                </button>
                              </div>
                              <div>
                                <button className=" flex gap-12 px-4  text-start mb-2">
                                  <p className="w-20 text-gray-600 hover:underline font-normal">
                                    Halal:{" "}
                                  </p>
                                  <p
                                    className={`${
                                      model.halal === "Yes"
                                        ? "text-green-500"
                                        : "text-red-500"
                                    } px-2`}
                                  >{` ${model.halal}`}</p>
                                </button>
                              </div>
                              <div>
                                <button className=" flex justify-between gap-12 px-4  text-start mb-2">
                                  <p className="w-20 text-gray-600 hover:underline font-normal">
                                    Vegan:{" "}
                                  </p>
                                  <p
                                    className={`${
                                      model.vegan === "Yes"
                                        ? "text-green-500"
                                        : "text-red-500"
                                    } px-2`}
                                  >{` ${model.vegan}`}</p>
                                </button>
                              </div>
                              <div>
                                <button className=" flex gap-12 px-4  text-start mb-2">
                                  <p className="w-20 text-gray-600 hover:underline font-normal">
                                    Vegetarian:{" "}
                                  </p>
                                  <p
                                    className={`${
                                      model.vegetarian === "Yes"
                                        ? "text-green-500"
                                        : "text-red-500"
                                    } px-2`}
                                  >{` ${model.vegetarian}`}</p>
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {category.categoryName.cosmetics.map((cosmetic, index) => (
                <div key={index}>
                  <div>
                    <div className="flex flex-col items-center justify-center  py-2 px-6 gap-3 w-[15vw]">
                      <div className="w-[15vw]">
                        <button
                          onClick={() => handleClickCosmetics(cosmetic.name)}
                          className="text-2xl text-gray-600 hover:underline font-bold tracking-wider mb-6 border-b"
                        >
                          {cosmetic.name}
                        </button>
                      </div>
                      {cosmetic.models.map((model, index) => (
                        <div
                          key={index}
                          className="px-4 w-60  text-center font-semibold"
                        >
                          <button
                            onClick={() => {
                              clickCategoryModel === model.name
                                ? setClickCategoryModel("")
                                : setClickCategoryModel(model.name);
                            }}
                            className="mb-4 hover:underline "
                          >
                            {model.name}
                          </button>
                          {clickCategoryModel === model.name && (
                            <div className=" text-start text-white ">
                              <div className="">
                                <button className="flex gap-12 px-4 text-start  mb-2">
                                  <p className="w-20 text-gray-600 hover:underline font-normal ">
                                    Alcohol:
                                  </p>
                                  <p
                                    className={`${
                                      model.alcohol === "No"
                                        ? "text-green-500"
                                        : "text-red-500"
                                    } px-2`}
                                  >{` ${model.alcohol}`}</p>
                                </button>
                              </div>
                              <div>
                                <button className=" flex gap-12 px-4  text-start mb-2">
                                  <p className="w-20 text-gray-600 hover:underline font-normal">
                                    Gluten:
                                  </p>
                                  <p
                                    className={`${
                                      model.allergic.Gluten === "No"
                                        ? "text-green-500"
                                        : "text-red-500"
                                    } px-2`}
                                  >{` ${model.allergic.Gluten}`}</p>
                                </button>
                              </div>
                              <div>
                                <button className=" flex gap-12 px-4  text-start mb-2 ">
                                  <p className="w-20 text-gray-600 hover:underline font-normal">
                                    Milk:{" "}
                                  </p>
                                  <p
                                    className={`${
                                      model.allergic.Milk === "No"
                                        ? "text-green-500"
                                        : "text-red-500"
                                    } px-2`}
                                  >{` ${model.allergic.Milk}`}</p>
                                </button>
                              </div>
                              <div>
                                <button className=" flex gap-12 px-4  text-start mb-2">
                                  <p className="w-20 text-gray-600 hover:underline font-normal">
                                    Egg:{" "}
                                  </p>
                                  <p
                                    className={`${
                                      model.allergic.Egg === "No"
                                        ? "text-green-500"
                                        : "text-red-500"
                                    } px-2`}
                                  >{` ${model.allergic.Egg}`}</p>
                                </button>
                              </div>
                              <div>
                                <button className=" flex gap-12 px-4  text-start mb-2">
                                  <p className="w-20 text-gray-600 hover:underline font-normal">
                                    Nuts:{" "}
                                  </p>
                                  <p
                                    className={`${
                                      model.allergic.Nuts === "No"
                                        ? "text-green-500"
                                        : "text-red-500"
                                    } px-2`}
                                  >{` ${model.allergic.Nuts}`}</p>
                                </button>
                              </div>
                              <div>
                                <button className=" flex gap-12 px-4  text-start mb-2">
                                  <p className="w-20 text-gray-600 hover:underline font-normal">
                                    Sesame:{" "}
                                  </p>
                                  <p
                                    className={`${
                                      model.allergic.Sesame === "No"
                                        ? "text-green-500"
                                        : "text-red-500"
                                    } px-2`}
                                  >{` ${model.allergic.Sesame}`}</p>
                                </button>
                              </div>
                              <div>
                                <button className=" flex gap-12 px-4  text-start mb-2">
                                  <p className="w-20 text-gray-600 hover:underline font-normal">
                                    Wheat:{" "}
                                  </p>
                                  <p
                                    className={`${
                                      model.allergic.Wheat === "No"
                                        ? "text-green-500"
                                        : "text-red-500"
                                    } px-2`}
                                  >{` ${model.allergic.Wheat}`}</p>
                                </button>
                              </div>
                              <div>
                                <button className=" flex gap-12 px-4  text-start mb-2">
                                  <p className="w-20 text-gray-600 hover:underline font-normal">
                                    Fish:{" "}
                                  </p>
                                  <p
                                    className={`${
                                      model.allergic.Fish === "No"
                                        ? "text-green-500"
                                        : "text-red-500"
                                    } px-2`}
                                  >{` ${model.allergic.Fish}`}</p>
                                </button>
                              </div>
                              <div>
                                <button className=" flex gap-12 px-4  text-start mb-2">
                                  <p className="w-20 text-gray-600 hover:underline font-normal">
                                    Halal:{" "}
                                  </p>
                                  <p
                                    className={`${
                                      model.halal === "Yes"
                                        ? "text-green-500"
                                        : "text-red-500"
                                    } px-2`}
                                  >{` ${model.halal}`}</p>
                                </button>
                              </div>
                              <div>
                                <button className=" flex justify-between gap-12 px-4  text-start mb-2">
                                  <p className="w-20 text-gray-600 hover:underline font-normal">
                                    Vegan:{" "}
                                  </p>
                                  <p
                                    className={`${
                                      model.vegan === "Yes"
                                        ? "text-green-500"
                                        : "text-red-500"
                                    } px-2`}
                                  >{` ${model.vegan}`}</p>
                                </button>
                              </div>
                              <div>
                                <button className=" flex gap-12 px-4  text-start mb-2">
                                  <p className="w-20 text-gray-600 hover:underline font-normal">
                                    Vegetarian:{" "}
                                  </p>
                                  <p
                                    className={`${
                                      model.vegetarian === "Yes"
                                        ? "text-green-500"
                                        : "text-red-500"
                                    } px-2`}
                                  >{` ${model.vegetarian}`}</p>
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
