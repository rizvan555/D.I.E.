import React from "react";

function ProductItem({ filteredItems }: any) {
  return (
    <div className="flex">
      {filteredItems.map((item: any, index: number) => (
        <div key={index}>
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
