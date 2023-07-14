import { Checkbox } from '@mui/material';
import { NextPage } from 'next';
import { useState } from 'react';

interface CheckboxItem {
  title: string;
  status: boolean;
}

const AddProduct: NextPage = () => {
  const [inputs, setInputs] = useState([
    { title: 'Category', type: 'text', placeholder: 'Category' },
    { title: 'Product', type: 'text', placeholder: 'Product' },
    { title: 'Model', type: 'text', placeholder: 'Model' },
  ]);
  const [checkboxes, setCheckboxes] = useState<CheckboxItem[]>([
    { title: 'Halal', status: true },
    { title: 'Vegan', status: true },
    { title: 'Vegetarian', status: true },
    { title: 'Alcohol', status: true },
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (categoryValue) {
      setSubmittedValuesCategory({ category: categoryValue });
      setCategoryValue('');
    }
    if (productValue) {
      setSubmittedValuesProduct({ product: productValue });
      setProductValue('');
    }
    if (modelValue) {
      setSubmittedValuesModel({ model: modelValue });
      setModelValue('');
    }
  };

  const filterCheckboxes = (title: string) => {
    const selectedCheckbox = checkboxes.find(
      (checkbox) => checkbox.title === title
    );
    if (selectedCheckbox) {
      selectedCheckbox.status = !selectedCheckbox.status;
      setCheckboxes([...checkboxes]);
    }
  };

  const selectedCheckboxTitles = checkboxes
    .filter((checkbox) => !checkbox.status)
    .map((checkbox) => checkbox.title);

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
        <ul className="flex items-center justify-center gap-10">
          {checkboxes.map((checkbox, index) => (
            <li key={index} className="flex items-center justify-center">
              <p>{checkbox.title}</p>
              <Checkbox
                checked={!checkbox.status}
                onClick={() => filterCheckboxes(checkbox.title)}
              />
            </li>
          ))}
        </ul>
        <button className="border" type="submit">
          SEND
        </button>
      </form>
      <div>Category: {submittedValuesCategory.category}</div>
      <div>Product: {submittedValuesProduct.product}</div>
      <div>Model: {submittedValuesModel.model}</div>
      {selectedCheckboxTitles.map((title, index) => (
        <div key={index}>{title}</div>
      ))}
    </div>
  );
};

export default AddProduct;
