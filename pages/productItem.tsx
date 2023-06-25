import React from "react";

function ProductItem({ filteredItems }: any) {
  return (
    <div className="flex">
      {filteredItems
        ? filteredItems.map((item: any, index: number) => (
            <div key={index}>
              {item.models.map((model: any, modelIndex: number) => (
                <div key={modelIndex}>
                  <h1 className="text-xl font-bold mb-4 border-b">
                    {model.name}
                  </h1>
                  <ul className="w-[12vw] text-start">
                    <li className="flex items-center">
                      <p className="w-[10vw]">Alcohol:</p> {model.alcohol}
                    </li>
                    <li className="flex items-center">
                      <p className="w-[10vw]">Halal:</p> {model.halal}
                    </li>
                    <li className="flex items-center">
                      <p className="w-[10vw]">Vegan:</p> {model.vegan}
                    </li>
                    <li className="flex items-center">
                      <p className="w-[10vw]">Vegetarian:</p> {model.vegetarian}
                    </li>
                    <li className="flex items-center">
                      <p className="w-[10vw]">Gluten:</p>
                      {model.allergic.Gluten}
                    </li>
                    <li className="flex items-center">
                      <p className="w-[10vw]">Milk:</p>
                      {model.allergic.Milk}
                    </li>
                    <li className="flex items-center">
                      <p className="w-[10vw]">Egg:</p>
                      {model.allergic.Egg}
                    </li>
                    <li className="flex items-center">
                      <p className="w-[10vw]">Nuts:</p>
                      {model.allergic.Nuts}
                    </li>
                    <li className="flex items-center">
                      <p className="w-[10vw]">Sesame:</p>
                      {model.allergic.Sesame}
                    </li>
                    <li className="flex items-center">
                      <p className="w-[10vw]"> Wheat:</p>
                      {model.allergic.Wheat}
                    </li>
                    <li className="flex items-center">
                      <p className="w-[10vw]">Fish:</p>
                      {model.allergic.Fish}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          ))
        : ""}
    </div>
  );
}

export default ProductItem;
