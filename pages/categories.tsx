import axios from "axios";
import React, { useEffect, useState } from "react";
import { PiBeerBottleBold } from "react-icons/pi";
import { LuWheat } from "react-icons/lu";
import { GiWheat, GiMilkCarton, GiSesame } from "react-icons/gi";
import { FaEgg, FaFish } from "react-icons/fa";
import { LuNut, LuVegan } from "react-icons/lu";
import Image from "next/image";
import halal from "../public/images/halal.png";
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
    <div className="text-center my-6">
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
              {category.category.drink.map((drink, index) => (
                <div key={index}>
                  <div className="flex flex-col items-center justify-center py-2 gap-3 w-[15vw]">
                    <div className="">
                      <button
                        onClick={() => handleClickDrink(drink.name)}
                        className="text-xl text-gray-600 font-bold tracking-wider mb-6 border-b border-t w-[10vw]"
                      >
                        DRINK
                      </button>
                    </div>

                    {drink.models.map((model, index) => (
                      <div
                        key={index}
                        className="px-4 font-semibold text-[14px]"
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
                          <div className=" ">
                            <div className="">
                              <button className="flex gap-12 mb-2 ">
                                <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal ">
                                  <PiBeerBottleBold />
                                  Alcohol:
                                </p>
                                <p
                                  className={`${
                                    model.alcohol === "No"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
                                >{` ${model.alcohol}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex gap-12   text-start mb-2">
                                <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                  <LuWheat />
                                  Gluten:
                                </p>
                                <p
                                  className={`${
                                    model.allergic.Gluten === "No"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
                                >{` ${model.allergic.Gluten}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex gap-12   text-start mb-2 ">
                                <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                  <GiMilkCarton />
                                  Milk:
                                </p>
                                <p
                                  className={`${
                                    model.allergic.Milk === "No"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
                                >{` ${model.allergic.Milk}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex gap-12   text-start mb-2">
                                <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                  <FaEgg />
                                  Egg:
                                </p>
                                <p
                                  className={`${
                                    model.allergic.Egg === "No"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
                                >{` ${model.allergic.Egg}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex gap-12   text-start mb-2">
                                <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                  <LuNut />
                                  Nuts:
                                </p>
                                <p
                                  className={`${
                                    model.allergic.Nuts === "No"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
                                >{` ${model.allergic.Nuts}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex gap-12   text-start mb-2">
                                <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                  <GiSesame />
                                  Sesame:
                                </p>
                                <p
                                  className={`${
                                    model.allergic.Sesame === "No"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
                                >{` ${model.allergic.Sesame}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex gap-12   text-start mb-2">
                                <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                  <GiWheat />
                                  Wheat:
                                </p>
                                <p
                                  className={`${
                                    model.allergic.Wheat === "No"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
                                >{` ${model.allergic.Wheat}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex gap-12   text-start mb-2">
                                <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                  <FaFish />
                                  Fish:
                                </p>
                                <p
                                  className={`${
                                    model.allergic.Fish === "No"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
                                >{` ${model.allergic.Fish}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex gap-12   text-start mb-2">
                                <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                  <Image
                                    src={halal}
                                    alt="halalImage"
                                    width={20}
                                    height={20}
                                  />
                                  Halal:
                                </p>
                                <p
                                  className={`${
                                    model.halal === "Yes"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
                                >{` ${model.halal}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex justify-between gap-12   text-start mb-2">
                                <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                  <LuVegan />
                                  Vegan:
                                </p>
                                <p
                                  className={`${
                                    model.vegan === "Yes"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
                                >{` ${model.vegan}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex gap-6   text-start mb-2">
                                <p className="flex items-center gap-2 w-25 text-gray-600 hover:underline font-normal">
                                  <LuVegan />
                                  Vegetarian:
                                </p>
                                <p
                                  className={`${
                                    model.vegetarian === "Yes"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
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

              {category.category.food.map((food, index) => (
                <div key={index}>
                  <div className="flex flex-col items-center justify-center py-2 px-6 gap-3 w-[15vw]">
                    <div className="">
                      <button
                        onClick={() => handleClickFood(food.name)}
                        className="text-xl text-gray-600 font-bold tracking-wider mb-6 border-b border-t w-[10vw]"
                      >
                        FOODS
                      </button>
                    </div>
                    {food.models.map((model, index) => (
                      <div
                        key={index}
                        className="px-4 font-semibold text-[14px]"
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
                          <div className="">
                            <div className="">
                              <button className="flex gap-12 px-4  mb-2">
                                <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                  <PiBeerBottleBold />
                                  Alcohol:
                                </p>
                                <p
                                  className={`${
                                    model.alcohol === "No"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
                                >{` ${model.alcohol}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex gap-12 px-4 mb-2">
                                <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                  <LuWheat />
                                  Gluten:
                                </p>
                                <p
                                  className={`${
                                    model.allergic.Gluten === "No"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
                                >{` ${model.allergic.Gluten}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex gap-12 px-4 mb-2 ">
                                <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                  <GiMilkCarton />
                                  Milk:
                                </p>
                                <p
                                  className={`${
                                    model.allergic.Milk === "No"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
                                >{` ${model.allergic.Milk}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex gap-12 px-4 mb-2">
                                <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                  <FaEgg />
                                  Egg:
                                </p>
                                <p
                                  className={`${
                                    model.allergic.Egg === "No"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
                                >{` ${model.allergic.Egg}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex gap-12 px-4 mb-2">
                                <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                  <LuNut />
                                  Nuts:
                                </p>
                                <p
                                  className={`${
                                    model.allergic.Nuts === "No"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
                                >{` ${model.allergic.Nuts}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex gap-12 px-4 mb-2">
                                <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                  <GiSesame />
                                  Sesame:
                                </p>
                                <p
                                  className={`${
                                    model.allergic.Sesame === "No"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
                                >{` ${model.allergic.Sesame}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex gap-12 px-4 mb-2">
                                <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                  <GiWheat />
                                  Wheat:
                                </p>
                                <p
                                  className={`${
                                    model.allergic.Wheat === "No"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
                                >{` ${model.allergic.Wheat}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex gap-12 px-4  text-start mb-2">
                                <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                  <FaFish />
                                  Fish:
                                </p>
                                <p
                                  className={`${
                                    model.allergic.Fish === "No"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
                                >{` ${model.allergic.Fish}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex gap-12 px-4  text-start mb-2">
                                <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                  <Image
                                    src={halal}
                                    alt="halalImage"
                                    width={20}
                                    height={20}
                                  />
                                  Halal:
                                </p>
                                <p
                                  className={`${
                                    model.halal === "Yes"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
                                >{` ${model.halal}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex justify-between gap-12 px-4  text-start mb-2">
                                <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                  <LuVegan />
                                  Vegan:
                                </p>
                                <p
                                  className={`${
                                    model.vegan === "Yes"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
                                >{` ${model.vegan}`}</p>
                              </button>
                            </div>
                            <div>
                              <button className=" flex gap-6 px-4  text-start mb-2">
                                <p className="flex items-center gap-2 w-25 text-gray-600 hover:underline font-normal">
                                  <LuVegan />
                                  Vegetarian:
                                </p>
                                <p
                                  className={`${
                                    model.vegetarian === "Yes"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
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

              {category.category.medicine.map((medi, index) => (
                <div key={index}>
                  <div>
                    <div className="flex flex-col items-center justify-center  py-2 px-6 gap-3 w-[15vw]">
                      <div className="">
                        <button
                          onClick={() => handleClickMedicine(medi.name)}
                          className="text-xl text-gray-600 font-bold tracking-wider mb-6 border-b border-t w-[10vw]"
                        >
                          MEDICINE
                        </button>
                      </div>
                      {medi.models.map((model, index) => (
                        <div
                          key={index}
                          className="px-4 font-semibold text-[14px]"
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
                            <div className="">
                              <div className="">
                                <button className="flex gap-12 px-4 mb-2">
                                  <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                    <PiBeerBottleBold />
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
                                <button className=" flex gap-12 px-4 mb-2">
                                  <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                    <LuWheat />
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
                                <button className=" flex gap-12 px-4 mb-2 ">
                                  <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                    <GiMilkCarton />
                                    Milk:
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
                                <button className=" flex gap-12 px-4 mb-2">
                                  <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                    <FaEgg />
                                    Egg:
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
                                <button className=" flex gap-12 px-4 mb-2">
                                  <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                    <LuNut />
                                    Nuts:
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
                                <button className=" flex gap-12 px-4 mb-2">
                                  <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                    <GiSesame />
                                    Sesame:
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
                                <button className=" flex gap-12 px-4 mb-2">
                                  <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                    <GiWheat />
                                    Wheat:
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
                                <button className=" flex gap-12 px-4 mb-2">
                                  <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                    <FaFish />
                                    Fish:
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
                                <button className=" flex gap-12 px-4 mb-2">
                                  <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                    <Image
                                      src={halal}
                                      alt="halalImage"
                                      width={20}
                                      height={20}
                                    />
                                    Halal:
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
                                <button className=" flex justify-between gap-12 px-4 mb-2">
                                  <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                    <LuVegan />
                                    Vegan:
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
                                <button className=" flex gap-6 px-4 mb-2">
                                  <p className="flex items-center gap-2 w-25 text-gray-600 hover:underline font-normal">
                                    <LuVegan />
                                    Vegetarian:
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

              {category.category.cosmetics.map((cosmetic, index) => (
                <div key={index}>
                  <div>
                    <div className="flex flex-col items-center justify-center py-2 gap-3 w-[15vw]">
                      <div className="">
                        <button
                          onClick={() => handleClickCosmetics(cosmetic.name)}
                          className="text-xl text-gray-600 font-bold tracking-wider mb-6 border-b border-t w-[10vw]"
                        >
                          COSMETICS
                        </button>
                      </div>
                      {cosmetic.models.map((model, index) => (
                        <div
                          key={index}
                          className="px-4 font-semibold text-[14px]"
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
                                  <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                    <PiBeerBottleBold />
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
                                  <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                    <LuWheat />
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
                                  <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                    <GiMilkCarton />
                                    Milk:
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
                                  <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                    <FaEgg />
                                    Egg:
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
                                  <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                    <LuNut />
                                    Nuts:
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
                                  <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                    <GiSesame />
                                    Sesame:
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
                                  <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                    <GiWheat />
                                    Wheat:
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
                                  <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                    <FaFish />
                                    Fish:
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
                                  <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                    <Image
                                      src={halal}
                                      alt="halalImage"
                                      width={20}
                                      height={20}
                                    />
                                    Halal:
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
                                  <p className="flex items-center gap-2 w-20 text-gray-600 hover:underline font-normal">
                                    <LuVegan />
                                    Vegan:
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
                                <button className=" flex gap-6 px-4  text-start mb-2">
                                  <p className="flex items-center gap-2 w-25 text-gray-600 hover:underline font-normal">
                                    <LuVegan />
                                    Vegetarian:
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
