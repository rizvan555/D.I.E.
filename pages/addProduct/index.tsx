import { NextPage } from 'next';
import { useState } from 'react';
import axios from 'axios';
import AllergicCheckbox from '../components/AllergicCheckbox';
import CategoryCheckbox from '../components/CategoryCheckbox';
import Image from 'next/image';

interface CheckboxItem {
  title: string;
  status: boolean;
}

const AddProduct: NextPage = () => {
  const [inputs, setInputs] = useState([
    { title: 'Category', type: 'text', placeholder: 'Category' },
    { title: 'Product', type: 'text', placeholder: 'Product' },
    { title: 'Image', type: 'file', placeholder: 'Image' },
  ]);
  const [categoryValue, setCategoryValue] = useState('');
  const [productValue, setProductValue] = useState('');
  const [imageValue, setImageValue] = useState('');

  const [submittedValuesCategory, setSubmittedValuesCategory] = useState<{
    category: string;
  }>({ category: '' });
  const [submittedValuesProduct, setSubmittedValuesProduct] = useState<{
    product: string;
  }>({ product: '' });
  const [submittedValueImage, setSubmittedValueImage] = useState<{
    image: string;
  }>({ image: '' });

  const [checkboxes, setCheckboxes] = useState<CheckboxItem[]>([
    { title: 'Halal', status: true },
    { title: 'Vegan', status: true },
    { title: 'Vegetarian', status: true },
    { title: 'Alcohol', status: true },
  ]);
  const [checkboxAllergic, setCheckboxAllergic] = useState<CheckboxItem[]>([
    { title: 'Gluten', status: true },
    { title: 'Milk', status: true },
    { title: 'Egg', status: true },
    { title: 'Nuts', status: true },
    { title: 'Sesame', status: true },
    { title: 'Wheat', status: true },
    { title: 'Fish', status: true },
  ]);

  const handleFilterCheckboxes = (title: string) => {
    const updateCheckbox = checkboxes.map((checkbox) => {
      if (checkbox.title === title) {
        return { ...checkbox, status: !checkbox.status };
      }
      return checkbox;
    });
    setCheckboxes(updateCheckbox);
  };

  const handleAllergicCheckboxes = (title: string) => {
    const updateAllergic = checkboxAllergic.map((allergic) => {
      if (allergic.title === title) {
        return { ...allergic, status: !allergic.status };
      }
      return allergic;
    });
    setCheckboxAllergic(updateAllergic);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (categoryValue || productValue || imageValue) {
      setSubmittedValuesCategory({ category: categoryValue });
      setSubmittedValuesProduct({ product: productValue });
      setSubmittedValueImage({ image: imageValue });

      setCategoryValue('');
      setProductValue('');
      setImageValue('');

      const halalValue = checkboxes.find(
        (checkbox) => checkbox.title === 'Halal'
      )?.status
        ? 'No'
        : 'Yes';

      const veganValue = checkboxes.find(
        (checkbox) => checkbox.title === 'Vegan'
      )?.status
        ? 'No'
        : 'Yes';

      const vegetarianValue = checkboxes.find(
        (checkbox) => checkbox.title === 'Vegetarian'
      )?.status
        ? 'No'
        : 'Yes';
      const alcoholValue = checkboxes.find(
        (checkbox) => checkbox.title === 'Alcohol'
      )?.status
        ? 'No'
        : 'Yes';

      const glutenValue = checkboxAllergic.find(
        (allergic) => allergic.title === 'Gluten'
      )?.status
        ? 'No'
        : 'Yes';
      const milkValue = checkboxAllergic.find(
        (allergic) => allergic.title === 'Milk'
      )?.status
        ? 'No'
        : 'Yes';
      const eggValue = checkboxAllergic.find(
        (allergic) => allergic.title === 'Egg'
      )?.status
        ? 'No'
        : 'Yes';
      const nutsValue = checkboxAllergic.find(
        (allergic) => allergic.title === 'Nuts'
      )?.status
        ? 'No'
        : 'Yes';
      const sesameValue = checkboxAllergic.find(
        (allergic) => allergic.title === 'Sesame'
      )?.status
        ? 'No'
        : 'Yes';
      const wheatValue = checkboxAllergic.find(
        (allergic) => allergic.title === 'Wheat'
      )?.status
        ? 'No'
        : 'Yes';
      const fishValue = checkboxAllergic.find(
        (allergic) => allergic.title === 'Fish'
      )?.status
        ? 'No'
        : 'Yes';

      const categoryData = {
        [categoryValue.toLowerCase()]: [
          {
            name: categoryValue,
            models: [
              {
                name: productValue,
                img: imageValue,
                alcohol: alcoholValue,
                allergic: {
                  Gluten: glutenValue,
                  Milk: milkValue,
                  Egg: eggValue,
                  Nuts: nutsValue,
                  Sesame: sesameValue,
                  Wheat: wheatValue,
                  Fish: fishValue,
                },
                halal: halalValue,
                vegan: veganValue,
                vegetarian: vegetarianValue,
              },
            ],
          },
        ],
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
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 justify-center items-center m-20"
      >
        {inputs.map((input, index) => (
          <div key={index} className="">
            {input.title === 'Category' && (
              <input
                value={categoryValue}
                onChange={(e) => setCategoryValue(e.target.value)}
                type={input.type}
                placeholder={input.placeholder}
                className="border py-1 px-2 w-[30vw] rounded"
              />
            )}
            {input.title === 'Product' && (
              <input
                value={productValue}
                onChange={(e) => setProductValue(e.target.value)}
                type={input.type}
                placeholder={input.placeholder}
                className="border py-1 px-2 w-[30vw] rounded"
              />
            )}
            {input.title === 'Image' && (
              <input
                value={imageValue}
                onChange={(e) => setImageValue(e.target.value)}
                type={input.type}
                placeholder={input.placeholder}
                className="border w-[30vw] rounded"
              />
            )}
          </div>
        ))}

        <button
          className="border w-[10vw] rounded tracking-wider"
          type="submit"
        >
          SEND
        </button>

        <CategoryCheckbox filterCheckboxes={handleFilterCheckboxes} />
        <AllergicCheckbox handleAllergicCheckboxes={handleAllergicCheckboxes} />
      </form>
      <div>Category: {submittedValuesCategory.category}</div>
      <div>Product: {submittedValuesProduct.product}</div>
      <div>
        Image:
        <Image
          src={submittedValueImage.image}
          alt="image"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default AddProduct;
