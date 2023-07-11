import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';

const ProductItem: NextPage = ({ filteredItems }: any) => {
  return (
    <div className="flex">
      {filteredItems.map((item: any, index: number) => (
        <div key={index}>
          {item.models.map((model: any, modelIndex: number) => (
            <div key={modelIndex} className="flex items-center justify-around">
              <Image
                src={model.img}
                alt="image"
                width={400}
                height={200}
                className=" hover:scale-110 transition-all cursor-pointer"
              />
              <div className="flex flex-col items-center justify-center w-[80vw]">
                <h1 className="text-3xl font-bold mb-6">{model.name}</h1>
                <ul className="w-[18vw] text-start">
                  <li className="flex items-center w-[18vw]">
                    <p className="w-[20vw] text-xl">Alcohol:</p>
                    <p
                      className={`${
                        model.alcohol === 'Yes'
                          ? 'text-red-500'
                          : 'text-green-500'
                      } px-2 text-[14px] font-bold text-xl`}
                    >
                      {model.alcohol}
                    </p>
                  </li>
                  <li className="flex items-center w-[18vw]">
                    <p className="w-[20vw] text-xl">Halal:</p>
                    <p
                      className={`${
                        model.halal === 'No' ? 'text-red-500' : 'text-green-500'
                      } px-2 text-[14px] font-bold text-xl`}
                    >
                      {model.halal}
                    </p>
                  </li>
                  <li className="flex items-center w-[18vw]">
                    <p className="w-[20vw] text-xl">Vegan:</p>
                    <p
                      className={`${
                        model.vegan === 'No' ? 'text-red-500' : 'text-green-500'
                      } px-2 text-[14px] font-bold text-xl`}
                    >
                      {model.vegan}
                    </p>
                  </li>
                  <li className="flex items-center w-[18vw]">
                    <p className="w-[20vw] text-xl">Vegetarian:</p>{' '}
                    <p
                      className={`${
                        model.vegetarian === 'No'
                          ? 'text-red-500'
                          : 'text-green-500'
                      } px-2 text-[14px] font-bold text-xl`}
                    >
                      {model.vegetarian}
                    </p>
                  </li>
                  <li className="flex items-center w-[18vw]">
                    <p className="w-[20vw] text-xl">Gluten:</p>
                    <p
                      className={`${
                        model.allergic.Gluten === 'Yes'
                          ? 'text-red-500'
                          : 'text-green-500'
                      } px-2 text-[14px] font-bold text-xl`}
                    >
                      {model.allergic.Gluten}
                    </p>
                  </li>
                  <li className="flex items-center w-[18vw]">
                    <p className="w-[20vw] text-xl">Milk:</p>
                    <p
                      className={`${
                        model.allergic.Milk === 'Yes'
                          ? 'text-red-500'
                          : 'text-green-500'
                      } px-2 text-[14px] font-bold text-xl`}
                    >
                      {model.allergic.Milk}
                    </p>
                  </li>
                  <li className="flex items-center w-[18vw]">
                    <p className="w-[20vw] text-xl">Egg:</p>
                    <p
                      className={`${
                        model.allergic.Egg === 'Yes'
                          ? 'text-red-500'
                          : 'text-green-500'
                      } px-2 text-[14px] font-bold text-xl`}
                    >
                      {model.allergic.Egg}
                    </p>
                  </li>
                  <li className="flex items-center w-[18vw]">
                    <p className="w-[20vw] text-xl">Nuts:</p>
                    <p
                      className={`${
                        model.allergic.Nuts === 'Yes'
                          ? 'text-red-500'
                          : 'text-green-500'
                      } px-2 text-[14px] font-bold text-xl`}
                    >
                      {model.allergic.Nuts}
                    </p>
                  </li>
                  <li className="flex items-center w-[18vw]">
                    <p className="w-[20vw] text-xl">Sesame:</p>
                    <p
                      className={`${
                        model.allergic.Sesame === 'Yes'
                          ? 'text-red-500'
                          : 'text-green-500'
                      } px-2 text-[14px] font-bold text-xl`}
                    >
                      {model.allergic.Sesame}
                    </p>
                  </li>
                  <li className="flex items-center w-[18vw]">
                    <p className="w-[20vw] text-xl"> Wheat:</p>
                    <p
                      className={`${
                        model.allergic.Wheat === 'Yes'
                          ? 'text-red-500'
                          : 'text-green-500'
                      } px-2 text-[14px] font-bold text-xl`}
                    >
                      {model.allergic.Wheat}
                    </p>
                  </li>
                  <li className="flex items-center w-[18vw]">
                    <p className="w-[20vw] text-xl">Fish:</p>
                    <p
                      className={`${
                        model.allergic.Fish === 'Yes'
                          ? 'text-red-500'
                          : 'text-green-500'
                      } px-2 text-[14px] font-bold text-xl`}
                    >
                      {model.allergic.Fish}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductItem;
