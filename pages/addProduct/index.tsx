import { NextPage } from 'next';
import { useState } from 'react';
import axios from 'axios';
import AllergicCheckbox from '../components/AllergicCheckbox';
import CategoryCheckbox from '../components/CategoryCheckbox';

const AddProduct: NextPage = () => {
  const [inputs, setInputs] = useState([
    { title: 'Category', type: 'text', placeholder: 'Category' },
    { title: 'Product', type: 'text', placeholder: 'Product' },
    { title: 'Model', type: 'text', placeholder: 'Model' },
  ]);

  const [categoryValue, setCategoryValue] = useState('');
  const [productValue, setProductValue] = useState('');
  const [modelValue, setModelValue] = useState('');
  const [submittedValuesCategory, setSubmittedValuesCategory] = useState<{
    category: string;
  }>({ category: '' });
  const [submittedValuesProduct, setSubmittedValuesProduct] = useState<{
    product: string;
  }>({ product: '' });
  const [submittedValuesModel, setSubmittedValuesModel] = useState<{
    model: string;
  }>({ model: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (categoryValue || productValue || modelValue) {
      setSubmittedValuesCategory({ category: categoryValue });
      setSubmittedValuesProduct({ product: productValue });
      setSubmittedValuesModel({ model: modelValue });

      setCategoryValue('');
      setProductValue('');
      setModelValue('');

      const categoryData = {
        [categoryValue.toLowerCase()]: [
          {
            name: productValue,
            models: [
              {
                name: modelValue,
              },
            ],
          },
        ],
        food: [],
        medicine: [],
        cosmetics: [],
      };
      try {
        await axios.post('http://localhost:3001/categories/category', {
          category: categoryData,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 justify-center items-center m-20"
      >
        {inputs.map((input, index) => (
          <div key={index}>
            {input.title === 'Category' && (
              <input
                value={categoryValue}
                onChange={(e) => setCategoryValue(e.target.value)}
                type={input.type}
                placeholder={input.placeholder}
                className="border"
              />
            )}
            {input.title === 'Product' && (
              <input
                value={productValue}
                onChange={(e) => setProductValue(e.target.value)}
                type={input.type}
                placeholder={input.placeholder}
                className="border"
              />
            )}
            {input.title === 'Model' && (
              <input
                value={modelValue}
                onChange={(e) => setModelValue(e.target.value)}
                type={input.type}
                placeholder={input.placeholder}
                className="border"
              />
            )}
          </div>
        ))}

        <button className="border" type="submit">
          SEND
        </button>
        <CategoryCheckbox />
        <AllergicCheckbox />
      </form>
      <div>Category: {submittedValuesCategory.category}</div>
      <div>Product: {submittedValuesProduct.product}</div>
      <div>Model: {submittedValuesModel.model}</div>
    </div>
  );
};

export default AddProduct;
