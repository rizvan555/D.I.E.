import { Checkbox, InputLabel } from '@mui/material';
import axios from 'axios';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

const AddProduct: NextPage = () => {
  const [categoryName, setCategoryName] = useState('');
  const [productName, setProductName] = useState('');
  const [modelName, setModelName] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [mainCheckBoxes, setMainCheckBoxes] = useState([
    { name: 'Halal', status: true },
    { name: 'Vegan', status: true },
    { name: 'Vegetarian', status: true },
    { name: 'Alcohol', status: true },
  ]);
  const [allergicCheckBoxes, setAllergicCheckBoxes] = useState([
    { name: 'Gluten', status: true },
    { name: 'Milk', status: true },
    { name: 'Egg', status: true },
    { name: 'Nuts', status: true },
    { name: 'Sesame', status: true },
    { name: 'Wheat', status: true },
    { name: 'Fish', status: true },
  ]);
  const [results, setResults] = useState<string[]>([]);

  const handleCategorySubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post('/categories/category', {
        category: {
          drink: [],
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addProduct = () => {
    if (inputValue) {
      const newResults = [...results, inputValue];
      setResults(newResults);
    }
    setInputValue('')
  };

  return (
    <div className="flex justify-center mt-10 h-[100vh]">
      <form className="flex flex-col gap-3" onSubmit={handleCategorySubmit}>
        <label className="flex gap-2">
          <h3 className="w-[10vw]">Category:</h3>
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="border w-[20vw]"
          />
        </label>
        <label className="flex gap-2">
          <h3 className="w-[10vw]">Product:</h3>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="border w-[20vw]"
          />
        </label>
        <label className="flex gap-2">
          <h3 className="w-[10vw]">Model:</h3>
          <input
            type="text"
            value={modelName}
            onChange={(e) => setModelName(e.target.value)}
            className="border w-[20vw]"
          />
        </label>
        <div className="">
          <button className="border px-4 py2" onClick={addProduct}>
            Send
          </button>
        </div>

        <div className="flex gap-5 flex-col">
          <div className="flex gap-10">
            {mainCheckBoxes.map((mainCheckBox, index) => (
              <div className="flex items-center" key={index}>
                <h3>{mainCheckBox.name}</h3>
                <Checkbox />
              </div>
            ))}
          </div>

          <div className="flex gap-8 w-[50vw]">
            {allergicCheckBoxes.map((allergicCheckBox, index) => (
              <div className="flex items-center " key={index}>
                <h4>{allergicCheckBox.name}</h4>
                <Checkbox />
              </div>
            ))}
          </div>
        </div>
      </form>
      <div className="flex flex-col">
        <div>Category: {categoryName}</div>
        <div>Product: {productName}</div>
        <div>Model: {modelName}</div>
      </div>
    </div>
  );
};

export default AddProduct;
