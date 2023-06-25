import Image from "next/image";
import React, { useEffect, useState } from "react";
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

function ProductItem({ filteredItems }: any) {
  return (
    <div className="flex">
      {filteredItems.map((item: any, index: number) => (
        <div key={index}>
          <h2>{item.category}</h2>
          {item.models.map((model: any, modelIndex: number) => (
            <ul key={modelIndex}>
              <li>{model.name}</li>
              <li>Alcohol: {model.alcohol}</li>
              <li>Halal: {model.halal}</li>
              <li>Vegan: {model.vegan}</li>
              <li>Vegetarian: {model.vegetarian}</li>
              <li>Gluten:{model.allergic.Gluten}</li>
              <li>Milk:{model.allergic.Milk}</li>
              <li>Egg:{model.allergic.Egg}</li>
              <li>Nuts:{model.allergic.Nuts}</li>
              <li>Sesame:{model.allergic.Sesame}</li>
              <li>Wheat:{model.allergic.Wheat}</li>
              <li>Fish:{model.allergic.Fish}</li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductItem;
