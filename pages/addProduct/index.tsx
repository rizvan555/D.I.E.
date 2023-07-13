import { NextPage } from 'next';
import { useState } from 'react';

const AddProduct: NextPage = () => {
  const [inputs, setInputs] = useState([
    { title: 'Category', type: 'text', placeholder: 'Category' },
    { title: 'Product', type: 'text', placeholder: 'Product' },
    { title: 'Model', type: 'text', placeholder: 'Model' },
  ]);
  const [categoryValue, setCategoryValue] = useState('');
  const [productValue, setProductValue] = useState('');
  const [modelValue, setModelValue] = useState('');
  const [submittedValuesCategory, setSubmittedValuesCategory] = useState({
    category: '',
  });
  const [submittedValuesProduct, setSubmittedValuesProduct] = useState({
    product: '',
  });
  const [submittedValuesModel, setSubmittedValuesModel] = useState({
    model: '',
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (categoryValue) {
      setSubmittedValuesCategory({
        category: categoryValue,
      });
      setCategoryValue('');
    }
    if (productValue) {
      setSubmittedValuesProduct({
        product: productValue,
      });
      setProductValue('');
    }
    if (modelValue) {
      setSubmittedValuesModel({
        model: modelValue,
      });
      setModelValue('');
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 justify-center items-center m-20"
      >
        {inputs.map((input, index) => (
          <div className="" key={index}>
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
      </form>
      <div>Category: {submittedValuesCategory.category}</div>
      <div>Product: {submittedValuesProduct.product}</div>
      <div>Model: {submittedValuesModel.model}</div>
    </div>
  );
};

export default AddProduct;
