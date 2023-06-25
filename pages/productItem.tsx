import React from "react";

function ProductItem({ filteredItems }: any) {
  return (
    <div className="flex">
      {filteredItems.map((item: any, index: number) => (
        <div key={index}>
          {item.models.map((model: any, modelIndex: number) => (
            <div key={modelIndex}>
              <h1 className="text-3xl font-bold mb-4 border-b">{model.name}</h1>
              <ul className="w-[12vw] text-start">
                <li className="flex items-center w-[15vw]">
                  <p className="w-[10vw]">Alcohol:</p>
                  <p
                    className={`${
                      model.alcohol === "Yes"
                        ? "text-red-500"
                        : "text-green-500"
                    } px-2 text-[14px] font-bold font-bold`}
                  >
                    {model.alcohol}
                  </p>
                </li>
                <li className="flex items-center w-[15vw]">
                  <p className="w-[10vw]">Halal:</p>
                  <p
                    className={`${
                      model.halal === "No" ? "text-red-500" : "text-green-500"
                    } px-2 text-[14px] font-bold`}
                  >
                    {model.halal}
                  </p>
                </li>
                <li className="flex items-center w-[15vw]">
                  <p className="w-[10vw]">Vegan:</p>
                  <p
                    className={`${
                      model.vegan === "No" ? "text-red-500" : "text-green-500"
                    } px-2 text-[14px] font-bold`}
                  >
                    {model.vegan}
                  </p>
                </li>
                <li className="flex items-center w-[15vw]">
                  <p className="w-[10vw]">Vegetarian:</p>{" "}
                  <p
                    className={`${
                      model.vegetarian === "No"
                        ? "text-red-500"
                        : "text-green-500"
                    } px-2 text-[14px] font-bold`}
                  >
                    {model.vegetarian}
                  </p>
                </li>
                <li className="flex items-center w-[15vw]">
                  <p className="w-[10vw]">Gluten:</p>
                  <p
                    className={`${
                      model.allergic.Gluten === "Yes"
                        ? "text-red-500"
                        : "text-green-500"
                    } px-2 text-[14px] font-bold`}
                  >
                    {model.allergic.Gluten}
                  </p>
                </li>
                <li className="flex items-center w-[15vw]">
                  <p className="w-[10vw]">Milk:</p>
                  <p
                    className={`${
                      model.allergic.Milk === "Yes"
                        ? "text-red-500"
                        : "text-green-500"
                    } px-2 text-[14px] font-bold`}
                  >
                    {model.allergic.Milk}
                  </p>
                </li>
                <li className="flex items-center w-[15vw]">
                  <p className="w-[10vw]">Egg:</p>
                  <p
                    className={`${
                      model.allergic.Egg === "Yes"
                        ? "text-red-500"
                        : "text-green-500"
                    } px-2 text-[14px] font-bold`}
                  >
                    {model.allergic.Egg}
                  </p>
                </li>
                <li className="flex items-center w-[15vw]">
                  <p className="w-[10vw]">Nuts:</p>
                  <p
                    className={`${
                      model.allergic.Nuts === "Yes"
                        ? "text-red-500"
                        : "text-green-500"
                    } px-2 text-[14px] font-bold`}
                  >
                    {model.allergic.Nuts}
                  </p>
                </li>
                <li className="flex items-center w-[15vw]">
                  <p className="w-[10vw]">Sesame:</p>
                  <p
                    className={`${
                      model.allergic.Sesame === "Yes"
                        ? "text-red-500"
                        : "text-green-500"
                    } px-2 text-[14px] font-bold`}
                  >
                    {model.allergic.Sesame}
                  </p>
                </li>
                <li className="flex items-center w-[15vw]">
                  <p className="w-[10vw]"> Wheat:</p>
                  <p
                    className={`${
                      model.allergic.Wheat === "Yes"
                        ? "text-red-500"
                        : "text-green-500"
                    } px-2 text-[14px] font-bold`}
                  >
                    {model.allergic.Wheat}
                  </p>
                </li>
                <li className="flex items-center w-[15vw]">
                  <p className="w-[10vw]">Fish:</p>
                  <p
                    className={`${
                      model.allergic.Fish === "Yes"
                        ? "text-red-500"
                        : "text-green-500"
                    } px-2 text-[14px] font-bold`}
                  >
                    {model.allergic.Fish}
                  </p>
                </li>
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductItem;
